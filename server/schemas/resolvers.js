const { AuthenticationError } = require('apollo-server-express');
const { User, ItemAddOn, Item, Killer, KillerAddOn, KillerBuild, KillPerk, SurvivorBuild, SurvPerk } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const uuid = require("uuid")

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User
          .findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('survBuilds')
          .populate('killBuilds');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    sections: async (parent, args, context) => {
      if (context.user) {
        const user = await User
          .findById(context.user._id)
          .populate('sections');

        return user.sections;
      }
      throw new AuthenticationError('Not logged in');
    },
    section: async (parent, { _id }, context) => {
      if (context.user) {
        const section = await Section
          .findById(_id)
          .populate('items');
        
        return section;
      }
      throw new AuthenticationError('Not logged in');
    },
    items: async (parent, args, context) => {
      if (context.user) {
        const user = await User
          .findById(context.user._id)
          .populate('items');

        return user.items;
      }
      throw new AuthenticationError('Not logged in');
    },
    item: async (parent, { _id }, context) => {
      if (context.user) {
        return await Item
          .findById(_id)
      }
      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, { donation, token }, context) => {
      const url = new URL(context.headers.referer).origin
      const idempontencyKey = uuid() //avoid multiple charges in case of network err

      //customer successfully created leads to
      const charges = await stripe.charges.create({ //creating a charge
        amount: price * 100,
        currency: 'usd',
        receipt_email: token.email,
        description: `Thank you for your donation of ${donation.name}` 
        }, {idempontencyKey})
      
      // session variable which controls success redirect and back functionality
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				mode: 'payment',
				success_url: `${url}/`,
				cancel_url: `${url}/donation`
			});

			return { session: session.id }; 
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addSection: async (parent, args, context) => {
      if (context.user) {
        const section = await Section.create({ ...args });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { sections: section } },
          { new: true }
        );

        return section;
      }
      throw new AuthenticationError('Not logged in');
    },
    editSection: async (parent, args, context) => {
      if (context.user) {
        return Section.findByIdAndUpdate(
          { _id: args._id },
          args,
          { new: true }
        );
      }
      throw new AuthenticationError('Not logged in');
    },
    deleteSection: async (parent, args, context) => {
      if (context.user) {
        return Section.deleteOne({ _id: args._id });
      }
      throw new AuthenticationError('Not logged in');
    },
    addItem: async (parent, args, context) => {
      if (context.user) {
        const item = await Item.create({ ...args});

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { items: item } },
          { new: true }
        );

        return item;
      }
      throw new AuthenticationError('Not logged in');
    },
    editItem: async (parent, args, context) => {
      if (context.user) {
        return await Item.findByIdAndUpdate(
          { _id: args._id },
          args,
          { new: true }
        );
      }
      throw new AuthenticationError('Not logged in');
    },
    deleteItem: async (parent, args, context) => {
      await Item.findOneAndDelete({ _id: args._id })
      if (context.user) {
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { items: args._id } }
        )}
      throw new AuthenticationError('Not logged in');
    },
  }
};

module.exports = resolvers;