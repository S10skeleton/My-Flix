const db = require('../config/connection');
const { Movie } = require('../models');
const movies = require('./movieseeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Movie', 'movies'); // The arguments should match your model and collection names

  await Movie.create(movies);

  console.log('all done!');
  process.exit(0);
});
