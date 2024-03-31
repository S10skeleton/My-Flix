const Movie = require('../../models');

const movieResolvers = {
  Query: {
    movies: async () => await Movie.find({}),
    movie: async (_, { id }) => await Movie.findById(id),
  },
  Mutation: {
    addMovie: async (_, { title, director, genre, releaseDate, duration, description }) => {
      const newMovie = new Movie({ title, director, genre, releaseDate, duration, description });
      return await newMovie.save();
    },
    // Other mutations like updateMovie, deleteMovie 
  },
};

module.exports = movieResolvers;
