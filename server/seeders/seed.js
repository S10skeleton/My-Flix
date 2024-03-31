const db = require('../config/connection');
const { Movie, User } = require('../models');
const movies = require('./movieSeeds.json');
const users = require('./userSeeds.json')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Movie', 'movies');
  await cleanDB('User', 'users');
  

  await User.create(users);
  await Movie.create(movies);

  console.log('all done!');
  process.exit(0);
});
