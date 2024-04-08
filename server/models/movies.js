const mongoose = require("mongoose");

// Define the schema for movies
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  genre: {
    type: [String], // Array of strings, as a movie can have multiple genres
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // Duration in minutes
    required: true,
  },
  description: {
    type: String,
  },
  streamingLink: {
    type: String,
  },
  posterUrl: {
    type: String, // URL of the movie poster
  },
  trailerLink: {
    type: String, // URL of the movie trailer
  },
  // You can add more fields as needed
});

// Create a model from the schema
const Movie = mongoose.model("Movie", movieSchema);

// Export the model
module.exports = Movie;
