// Import the mongoose connection from connection.js
const db = require('../config/connection');

// Import models
const Movie = require('./movies');
const User = require('./users');

// Optional: Listen for the connected event from the centralized connection logic
// and log it for debugging purposes
db.once('connected', () => {
    console.log('Connected to MongoDB via connection.js');
});

// Optional: Handle connection errors
db.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
});

// Export models
module.exports = {
    Movie,
    User
};

