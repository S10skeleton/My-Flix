


const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

require('dotenv').config();
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Define your schema and resolvers for Apollo Server
const { typeDefs, resolvers } = require('./schemas')

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

// MongoDB connection
mongoose.connect('your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
});
