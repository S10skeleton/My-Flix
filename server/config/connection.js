const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://s10skeleton:Goesboom1!@cluster0.kbvfy0p.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Mongoose connection error:', err.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

module.exports = mongoose.connection;
