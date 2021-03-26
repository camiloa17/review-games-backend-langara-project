const router = require('express').Router;
const genreRoutes = require('./genre/genreRoutes');
const gamesRoutes = require('./games/gamesRoutes');
const platformRoutes = require('./platform/platformRoutes');
const reviewsRoutes = require('./reviews/reviewsRoutes');
const usersRoutes = require('./users/usersRoutes');

const api = router();

api.use('/reviews',reviewsRoutes);

api.use('/platform',platformRoutes);

api.use('/genre',genreRoutes);

api.use('/game',gamesRoutes);

api.use('users',usersRoutes);

module.exports=api;