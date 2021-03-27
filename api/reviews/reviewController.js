const { queryAsync } = require('../../database/asyncQuery');

exports.getReviews = async (req, res, next) => {
    try {
        const reviews = await queryAsync('select * from game_review gr,game g where gr.gameID=g.gameID');
        res.json(reviews);
    } catch (err) {
        next(err);
    }
};  

exports.getSearchReviews = async (req, res, next) => {
    try {
        const {query}=req.params;
        
        const reviews = await queryAsync(`select * from game_review gr,game g where gr.gameID=g.gameID and g.gamename like "${'%'+query+'%'}"`);
        
        res.json(reviews);
    } catch (err) {
        next(err);
    }
};

exports.getPlatformReviews = async (req, res, next) => {
    try {
        const {platform}=req.params;
        const reviews = await queryAsync(`select * from game_review gr,game g,game_platform gp where gr.gameID=g.gameID and g.gameID=gp.gameID and gp.platform=?`,[platform]);
        
        res.json(reviews);
    } catch (err) {
        next(err);
    }
}; 

exports.getAReview = async (req, res, next) => {
    try {
        const {reviewid} = req.params;
        const review = await queryAsync('select * from game_review gr,game g where gr.gameID=g.gameID and gr.reviewID=?', [reviewid]);
        res.json(review);
    } catch (err) {
        next(err);
    }
};

exports.createReview = async (req, res, next) => {
    try {
        const data = req.body;
        const insertData = Object.values(data);
        
        const authorAndSup = insertData.slice(insertData.length - 2,
            insertData.length)
       
        const review = await queryAsync(
            'insert into game_review (gameID, title,reviewerrating, content,authorID, date_updated, date_created) values (?,?,?,?,?,?,?)'
            , [...insertData,new Date(),new Date()]);
        const supervise = await queryAsync('insert into supervise(authorX_employeeID,authorY_employeeID) values (?,?)',authorAndSup);
        res.json({review,supervise});
    } catch (err) {
        next(err);
    }
};

exports.deleteAReview = async (req, res, next) => {
    try {
      const { reviewid } = req.params;
      const deletedGenre = await queryAsync('delete from review where reviewID=? ', [
          reviewid,
      ]);
      res.json(deletedGenre);
    } catch (err) {
      next(err);
    }
  };
  
  exports.updateAReview = async (req, res, next) => {
    try {
      const { genrename } = req.params;
      const data = req.body;
  
      const insertGenre = await queryAsync(
        'update genre set genrename=? where genrename=?',
        [data.genrename, genrename]
      );
      res.json(insertGenre);
    } catch (err) {
      next(err);
    }
  };