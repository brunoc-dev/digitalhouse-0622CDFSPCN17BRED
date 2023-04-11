const express = require('express');
const router = express.Router();
const {Movie} = require('../../database/models');

router.get('/', async (req, res) => {
  const movies = await Movie.findAll();
  let awards = 0

  movies.forEach(movie => {
    awards += movie.awards
  });

  let resposta = {
    meta: {
        status : 200,
        total: awards,
        url: 'api/movies'
    },
    data: movies
  }

  res.json(resposta);
});

module.exports = router;