const router = require('express').Router;
const {getReviews, getAReview} = require('./reviewController');
const routes = router();

routes.get('/',getReviews);
routes.get('/:reviewid',getAReview);

module.exports = routes;