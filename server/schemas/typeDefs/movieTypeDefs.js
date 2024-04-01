// movieTypeDefs.js

const { gql } = require('apollo-server-express');

const movieTypeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    director: String!
    genre: [String]!
    releaseDate: String!
    duration: Int
    description: String
    streamingLink: String # Add the streaming link field
  }

  extend type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }

  extend type Mutation {
    addMovie(title: String!, director: String!, genre: [String]!, releaseDate: String!, duration: Int, description: String, streamingLink: String): Movie # Include streamingLink in the mutation
    updateMovie(id: ID!, title: String, director: String, genre: [String], releaseDate: String, duration: Int, description: String, streamingLink: String): Movie # Include streamingLink in the mutation
    deleteMovie(id: ID!): Movie
  }
`;

module.exports = movieTypeDefs;
