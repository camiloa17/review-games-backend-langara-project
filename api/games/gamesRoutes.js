const router = require('express').Router;
const {
  getGames,
  getAGame,
  createAGame,
  deleteAGame,
  updateAGame,
} = require('./gameController');
const routes = router();

routes.get('/', getGames);

routes.post('/', createAGame);
routes.get('/:gameid', getAGame);
routes.delete('/:gameid', deleteAGame);

routes.put('/:gameid', updateAGame);
module.exports = routes;
