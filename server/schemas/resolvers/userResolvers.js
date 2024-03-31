const { User, Movie } = require('../../models');

const userResolvers = {
  Query: {
    // Fetch all users
    users: async () => {
      return await User.find({}).populate('favorites');
    },
    // Fetch a single user by ID
    user: async (_, { id }) => {
      return await User.findById(id).populate('favorites');
    },
  },
  Mutation: {
    // Create a new user
    addUser: async (_, { username, email, password }) => {
      const newUser = new User({ username, email, password });
      return await newUser.save();
    },
    // Update user's information
    updateUser: async (_, { id, username, email }) => {
      return await User.findByIdAndUpdate(
        id,
        { username, email },
        { new: true }
      );
    },
    // Add a movie to user's favorites
    addFavorite: async (_, { userId, movieId }) => {
      return await User.findByIdAndUpdate(
        userId,
        { $addToSet: { favorites: movieId } }, // $addToSet avoids duplicates
        { new: true }
      ).populate('favorites');
    },
    // Remove a movie from user's favorites
    removeFavorite: async (_, { userId, movieId }) => {
      return await User.findByIdAndUpdate(
        userId,
        { $pull: { favorites: movieId } },
        { new: true }
      ).populate('favorites');
    },
    // Other mutations like delete user
  },
};

module.exports = userResolvers;
