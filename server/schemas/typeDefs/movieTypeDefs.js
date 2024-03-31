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
  }

  extend type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }

  extend type Mutation {
    addMovie(title: String!, director: String!, genre: [String]!, releaseDate: String!, duration: Int, description: String): Movie
    # Other mutations like updateMovie, deleteMovie 
  }
`;

module.exports = movieTypeDefs;
