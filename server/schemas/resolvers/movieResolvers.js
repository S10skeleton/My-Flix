// movieResolvers.js

const Movie = require('../../models/movies');

const movieResolvers = {
  Query: {
    movies: async () => {
      try {
        // Fetch all movies from the database
        const movies = await Movie.find({});
        return movies;
      } catch (error) {
        // Handle errors, such as database connection errors
        console.error(error);
        throw new Error('Failed to fetch movies');
      }
    },
    movie: async (_, { id }) => await Movie.findById(id),
  },
  Mutation: {
    addMovie: async (_, { title, director, genre, releaseDate, duration, description, streamingLink, posterUrl  }) => {
      const newMovie = new Movie({ title, director, genre, releaseDate, duration, description, streamingLink, posterUrl });
      return await newMovie.save();
    },
    updateMovie: async (_, { id, title, director, genre, releaseDate, duration, description, streamingLink }) => {
      const updatedMovie = {
        title, 
        director, 
        genre, 
        releaseDate, 
        duration, 
        description,
        streamingLink // Include streamingLink in the update
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
  },
};

module.exports = movieResolvers;
