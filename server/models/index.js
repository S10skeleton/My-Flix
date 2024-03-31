const mongoose = require('mongoose');

// Import models
const Movie = require('./movies');
const User = require('./users');

// Connect to MongoDB
mongoose.connect('your-mongodb-connection-string', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Check for a successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Handle connection errors
mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
});

// Export models
module.exports = {
    Movie,
    User
};
