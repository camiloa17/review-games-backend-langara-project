const { queryAsync } = require('../../database/asyncQuery');

exports.getReviews = async (req, res, next) => {
    try {
        const reviews = await queryAsync('select * from game_review');
        res.json(reviews);
    } catch (err) {
        next(err);
    }
};  

exports.getAReview = async (req, res, next) => {
    try {
        const {reviewid} = req.params;
        const review = await queryAsync('select * from game_review where reviewID=', [reviewid]);
        res.json(review);
    } catch (err) {
        next(err);
    }
};

exports.createReview = async (req, res, next) => {
    try {
        const data = req.body;
        const insertData = Object.values(data);
        const review = await queryAsync(
            'insert into game_review (authorID, gameID, title, content, reviewerrating, date_updated, date_created) values (?,?,?,?,?,?,?)'
            , insertData);
        res.json({status: "Success"});
    } catch (err) {
        next(err);
    }
};