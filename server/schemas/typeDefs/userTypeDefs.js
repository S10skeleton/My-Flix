const { gql } = require("apollo-server-express");

const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    favorites: [Movie]
  }
  type AuthPayload {
    token: String!
    user: User!
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
    login(email: String!, password: String!): AuthPayload

  }

  extend type Mutation {
    loginUser(email: String!, password: String!): AuthPayload
    addUser(username: String!, email: String!, password: String!): AuthPayload
    updateUser(id: ID!, username: String, email: String): User
    deleteUser(id: ID!): User
    addFavorite(userId: ID!, movieId: ID!): User
    removeFavorite(userId: ID!, movieId: ID!): User
  }
`;

module.exports = userTypeDefs;
