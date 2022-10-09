const { AuthenticationError } = require('apollo-server-express');
const { User, ItemAddOn, Item, Killer, KillerAddOn, KillerBuild, KillPerk, SurvivorBuild, SurvPerk, Survivor } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const uuid = require("uuid");
const { findById } = require('../models/SurvivorBuild');

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
    survBuilds: async (parent, args, context) => {
      return await SurvivorBuild.find()
    },
    survBuild: async (parent, { _id }, context) => {
      return await SurvivorBuild.findById(_id)
    },
    survivors: async (parent, args, context) => {
      return await Survivor.find()
    },
    survivor: async (parent, { _id }, context) => {
      return await Survivor.findById(_id)
    },
    items: async (parent, args, context) => {
      return await Item.find();
    },
    item: async (parent, { _id }, context) => {
      return await Item,findById(_id)
    },
    itemAddOns: async (parent, args, context) => {
      return await ItemAddOn.find()
    },
    ItemAddOn: async (parent, { _id }, context) => {
      return await ItemAddOn.findById(_id)
    },
    killBuilds: async (parent, args, context) => {
      return await KillerBuild.find()
    },
    killBuild: async (parent, args, context) => {
      return await KillerBuild.findById(_id)
    },
    killers: async (parent, args, context) => {
      return await Killer.find()
    },
    killer: async (parent, { _id }, context) => {
      return await Killer.findById(_id)
    },
    killPerks: async (parent, { _id }, context) => {
      return await KillPerk.find()
    },
    killPerk: async (parent, { _id }, context) => {
      return await KillPerk.findById(_id)
    },
    killAddOns: async (parent, args, context) => {
      return await KillerAddOn.find()
    },
    killAddOn: async (parent, { _id }, context) => {
      return await KillerAddOn.findById(_id)
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
    addSurvBuild: async (parent, args, context) => {
      if (context.user) {
        const build = await SurvivorBuild.create({ ...args });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { survBuilds: build } },
          { new: true }
        );

        return build;
      }
      throw new AuthenticationError('Not logged in');
    },
    editSurvBuild: async (parent, args, context) => {
      if (context.user) {
        return SurvivorBuild.findByIdAndUpdate(
          { _id: args._id },
          args,
          { new: true }
        );
      }
      throw new AuthenticationError('Not logged in');
    },
    deleteSurvBuild: async (parent, { _id }, context) => {
      if (context.user) {
        return SurvivorBuild.deleteOne({ _id: _id });
      }
      throw new AuthenticationError('Not logged in');
    },
    addKillBuild: async (parent, args, context) => {
      if (context.user) {
        const build = await KillerBuild.create({ ...args});

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { killBuilds: build } },
          { new: true }
        );

        return build;
      }
      throw new AuthenticationError('Not logged in');
    },
    editKillBuild: async (parent, args, context) => {
      if (context.user) {
        return await KillerBuild.findByIdAndUpdate(
          { _id: args._id },
          args,
          { new: true }
        );
      }
      throw new AuthenticationError('Not logged in');
    },
    deleteKillBuild: async (parent, { _id }, context) => {
      if (context.user) {
        return await KillerBuild.deleteOne({ _id: _id })}
      throw new AuthenticationError('Not logged in');
    },
  }
};

module.exports = resolvers;