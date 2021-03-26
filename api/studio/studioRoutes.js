const router = require('express').Router;
const {createAStudio,deleteAStudio,getAStudio,getStudios,updateAStudio} =require('./studioController')
const routes = router();

routes.get('/', getStudios);

routes.post('/', createAStudio);
routes.get('/:studioname', getAStudio);
routes.delete('/:studioname', deleteAStudio);

routes.put('/:studioname', updateAStudio);
module.exports = routes;