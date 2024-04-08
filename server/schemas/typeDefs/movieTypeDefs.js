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
    streamingLink: String
    trailerLink: String
    posterUrl: String
  }

  extend type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    randomMovie: Movie  # Add this line
  }

  extend type Mutation {
    addMovie(title: String!, director: String!, genre: [String]!, releaseDate: String!, duration: Int, description: String, streamingLink: String, trailerLink: String, posterUrl: String): Movie
    updateMovie(id: ID!, title: String, director: String, genre: [String], releaseDate: String, duration: Int, description: String, streamingLink: String, trailerLink: String, posterUrl: String): Movie
    deleteMovie(id: ID!): Movie
  }
`;

module.exports = movieTypeDefs;
