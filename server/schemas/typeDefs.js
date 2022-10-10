const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    survBuilds: [SurvivorBuild]
    killBuilds: [KillerBuild]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Survivor {
    _id: ID
    name: String
    description: String
    perks: [SurvPerk]
    img: String
  }

  type SurvivorBuild {
    _id: ID
    name: String
    description: String
    createdAt: String
    perks: [SurvPerk]
    item: Item
    addOns : [ItemAddOn]
  }

  type SurvPerk {
    _id: ID
    name: String
    description: String
    img: String
    survivor: Survivor
  }

  type Item {
    _id: ID
    name: String
    description: String
    type: String
    tier: String
    img: String
  }

  type ItemAddOn {
    _id: ID
    name: String
    description: String
    item: Item
    tier: String
    img: String
  }

  type Killer {
    _id: ID
    name: String
    description: String
    perks: [KillPerk]
    addOns: [KillerAddOn]
    baseSpeed: Float
    img: String
  }

  type KillerBuild {
    _id: ID
    name: String
    description: String
    killer: Killer
    perks: [Perk]
    addOns: [KillerAddOn]
  }

  type KillPerk {
    _id: ID
    name: String
    description: String
    img: String
  }

  type KillerAddOn {
    _id: ID
    name: String
    description: String
    img: String
    killer: Killer
    tier: String
  }

  type Checkout {
    session: ID
  }

  type Query {
    me: User
    survBuilds: [SurvivorBuild]
    survBuild(_id: ID!): SurvivorBuild
    survivors: [Survivor]
    survivor(_id: ID!): Survivor
    survPerks: [SurvPerk]
    survPerk(_id: ID!): SurvPerk
    items: [Item]
    item(_id: ID!): Item
    itemAddOns: [ItemAddOn]
    itemAddOn: Item
    killBuilds: [KillerBuild]
    killBuild(_id: ID!): KillerBuild
    killers: [Killer]
    killer(_id: ID!): Killer
    killPerks: [KillPerk]
    killPerk(_id: ID!): KillPerk
    killAddOns: [KillerAddOn]
    killAddOn(_id: ID!): KillerAddOn
    checkout(name: String!, price: Int!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    logout: User
    addUser(email: String!, password: String!): Auth
    addSurvBuild(name: String!, description: String!, perks: String, item: String, addOns: String): SurvivorBuild
    editSurvBuild(_id: ID!, name: String, description: String, perks: String, item: String, addOns: String): SurvivorBuild
    deleteSurvBuild(_id: ID!): SurvivorBuild
    addKillBuild(name: String!, description: String!, killer: String!, perks: String, addOns: String): KillerBuild
    editKillBuild(_id: ID!, name: String, description: String, killer: String, perks: String, addOns: String): Item
    deleteKillBuild(_id: ID!): KillerBuild
  }
`;

module.exports = typeDefs;