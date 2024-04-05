const { User, Movie } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { signToken } = require("../../utils/Auth");

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
  },

  Mutation: {
    // Create a new user
    addUser: async (_, { username, email, password }) => {
      const newUser = new User({ username, email, password });
      // Save the new user
      await newUser.save();
      // Generate a token for the new user
      const token = signToken(newUser);
      // Return the token and user information
      return { token, user: newUser };
    },
    // Login a user
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.comparePassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
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
