const { gql } = require('apollo-server-express');
const movieTypeDefs = require('./movieTypeDefs');
const userTypeDefs = require('./userTypeDefs');

const baseTypeDefs = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

module.exports = [baseTypeDefs, movieTypeDefs, userTypeDefs];
