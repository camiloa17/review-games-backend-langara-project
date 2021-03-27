const router = require('express').Router;
const {getReviews, getAReview,createReview,deleteAReview,updateAReview,getSearchReviews,getPlatformReviews} = require('./reviewController');
const routes = router();


routes.get('/', getReviews);
routes.get('/search/:query',getSearchReviews);
routes.get('/platform/:platform',getPlatformReviews);
routes.post('/', createReview);
routes.get('/:reviewid', getAReview);
routes.delete('/:reviewid', deleteAReview);

routes.put('/:reviewid', updateAReview);
module.exports = routes;