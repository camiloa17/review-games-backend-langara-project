const router = require('express').Router;
const {
  createAGenre,
  deleteAGenre,
  getAGenre,
  getGenres,
  updateAGenre,
} = require('./genreController');
const routes = router();

routes.get('/', getGenres);

routes.post('/', createAGenre);
routes.get('/:genrename', getAGenre);
routes.delete('/:genrename', deleteAGenre);

routes.put('/:genrename', updateAGenre);
module.exports = routes;
