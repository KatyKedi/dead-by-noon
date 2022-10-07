const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    sections: [Section]
    items: [Item]
    itemCount: Int
  }

  input ItemInput {
    description: String
    weight: Float
    size: String
  }

  type Item {
    _id: ID
    name: String
    description: String
    createdAt: String
    weight: Float
    size: String
    section: String
  }

  type Section {
    _id: ID
    name: String
    full: Boolean
    items: [Item]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    me: User
    sections: [Section]
    section(_id: ID!): Section
    items: [Item]
    item(_id: ID!): Item
    checkout(name: String!, price: Int!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    logout: User
    addUser(email: String!, password: String!): Auth
    addSection(name: String!, full: Boolean): Section
    editSection(_id: ID!, name: String!, full: Boolean): Section
    deleteSection(_id: ID!): Section
    addItem(name: String!, section: String!, description: String, size: String, weight: Float): Item
    editItem(_id: ID!, name: String!, section: String!, description: String, size: String, weight: Float): Item
    deleteItem(_id: ID!): Item
  }
`;

module.exports = typeDefs;
