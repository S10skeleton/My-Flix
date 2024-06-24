const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'your-default-mongodb-uri', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
