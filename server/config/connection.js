const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://s10skeleton:Goesboom1!@cluster0.kbvfy0p.mongodb.net/');

module.exports = mongoose.connection;

