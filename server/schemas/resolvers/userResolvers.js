const { User, Movie } = require("../../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userResolvers = {
  Query: {
    // Fetch all users
    users: async () => {
      return await User.find({}).populate("favorites");
    },
    // Fetch a single user by ID
    user: async (_, { id }) => {
      return await User.findById(id).populate("favorites");
    },

        login: async (_, { email, password }) => {
          // Logic to authenticate user and generate a token
          const user = await authenticateUser(email, password); // Replace with your auth logic
          const token = generateToken(user); // Replace with your token generation logic
    
          return { token, user };
        },
    
      },
  
  Mutation: {
    // Create a new user
    addUser: async (_, { username, email, password }) => {
      const newUser = new User({ username, email, password });
      return await newUser.save();
    },
    // Login a user
    loginUser: async (_, { email, password }) => {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      // Check if password is correct
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Incorrect password');
      }

      // Generate a token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return {
        token,
        user,
      };
    },
  
    // Update user's information
    updateUser: async (_, { id, username, email }) => {
      return await User.findByIdAndUpdate(
        id,
        { username, email },
        { new: true }
      );
    },
    // Delete a movie from favorites
    deleteUser: async (_, { id }) => {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new Error("User not found");
      }
      return deletedUser;
    },
    // Add a movie to user's favorites
    addFavorite: async (_, { userId, movieId }) => {
      return await User.findByIdAndUpdate(
        userId,
        { $addToSet: { favorites: movieId } }, // $addToSet avoids duplicates
        { new: true }
      ).populate("favorites");
    },
    // Remove a movie from user's favorites
    removeFavorite: async (_, { userId, movieId }) => {
      return await User.findByIdAndUpdate(
        userId,
        { $pull: { favorites: movieId } },
        { new: true }
      ).populate("favorites");
    },
  },
};

module.exports = userResolvers;
