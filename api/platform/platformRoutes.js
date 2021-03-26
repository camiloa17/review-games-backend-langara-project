const router = require('express').Router;
const {
  createAPlatform,
  deleteAPlatform,
  getAPlatform,
  getPlatforms,
  updateAPlatform,
} = require('./platformController');
const routes = router();

routes.get('/', getPlatforms);

routes.post('/', createAPlatform);
routes.get('/:platformName', getAPlatform);
routes.delete('/:platformName', deleteAPlatform);

routes.put('/:platformName', updateAPlatform);
module.exports = routes;
