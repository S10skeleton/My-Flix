const { gql } = require("apollo-server-express");

const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    favorites: [Movie]
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
  }

  extend type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    updateUser(id: ID!, username: String, email: String): User
    addFavorite(userId: ID!, movieId: ID!): User
    removeFavorite(userId: ID!, movieId: ID!): User
    # // ... (other mutations)
  }
`;

module.exports = userTypeDefs;
