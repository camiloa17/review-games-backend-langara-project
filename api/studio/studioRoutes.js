const router = require('express').Router;
const {createAStudio,deleteAStudio,getAStudio,getStudios,updateAStudio,addDirector,getAllDirectors} =require('./studioController')
const routes = router();

routes.get('/', getStudios);

routes.post('/', createAStudio);
routes.get('/directors',getAllDirectors);
routes.get('/:studioname', getAStudio);
routes.delete('/:studioname', deleteAStudio);
routes.post('/director/:studioname',addDirector);
routes.put('/:studioname', updateAStudio);
module.exports = routes;