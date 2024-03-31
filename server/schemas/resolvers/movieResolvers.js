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
  },
  updateMovie: async (_, { id, title, director, genre, releaseDate, duration, description }) => {
    const updatedMovie = {
      title, 
      director, 
      genre, 
      releaseDate, 
      duration, 
      description
    };
    return await Movie.findByIdAndUpdate(id, updatedMovie, { new: true });
  },
  deleteMovie: async (_, { id }) => {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      throw new Error('Movie not found');
    }
    return deletedMovie;
  },
  
};

module.exports = movieResolvers;
