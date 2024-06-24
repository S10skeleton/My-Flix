const express = require('express');
const serverless = require('serverless-http');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('../../server/utils/Auth'); // Adjust path as necessary

const typeDefs = require('../../server/schemas/typeDefs');
const resolvers = require('../../server/schemas/resolvers');
const db = require('../../server/config/connection');

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();
  app.use(authMiddleware);

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/.netlify/functions/graphql', expressMiddleware(server));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    console.log(`API server running!`);
    console.log(`Use GraphQL at /.netlify/functions/graphql`);
  });
};

startApolloServer();

module.exports.handler = serverless(app);
