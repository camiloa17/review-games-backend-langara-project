const router = require('express').Router;
const {createAUser,deleteAUser,getAUser,getUsers,updateAUser} = require('./usersController');
const routes = router();

routes.get('/', getUsers);

routes.post('/', createAUser);
routes.get('/:employeeid', getAUser);
routes.delete('/:employeeid', deleteAUser);

routes.put('/:employeeid', updateAUser);
module.exports = routes;