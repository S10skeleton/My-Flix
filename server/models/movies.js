const mongoose = require('mongoose');

// Define the schema for movies
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    genre: {
        type: [String], // Array of strings, as a movie can have multiple genres
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    duration: {
        type: Number, // Duration in minutes
        required: true
    },
    description: {
        type: String
    },
    // You can add more fields as needed
});

// Create a model from the schema
const Movie = mongoose.model('Movie', movieSchema);

// Export the model
module.exports = Movie;
