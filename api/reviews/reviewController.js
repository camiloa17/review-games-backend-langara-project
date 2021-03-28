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
        const query=`SELECT 
        gr.reviewID,
        g.gameID,
        gr.title,
        gr.content,
        gr.reviewerrating,
        g.genre,
        g.gamename,
        g.numberOfPlayers,
        g.budget,
        g.cover,
        g.gameStudio,
        g.studioDirector,
        g.minRequirements,
        GROUP_CONCAT(gp.platform) as platforms
    FROM
        game_review gr,
        game g,
        game_platform gp
    WHERE
        gr.gameID = g.gameID AND g.gameID= gp.gameID AND gr.reviewID = ?
    GROUP BY gr.reviewID , g.gameID , gr.title , gr.content , gr.reviewerrating , g.genre , g.gamename , g.numberOfPlayers , g.budget , g.cover , g.gameStudio , g.studioDirector , g.minRequirements
        `
        const review = await queryAsync(query, [reviewid]);
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
        const supervise = await queryAsync('insert into supervise(authorX_employeeID,authorY_employeeID,reviewID) values (?,?,?)',[...authorAndSup,review.insertId]);
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
    //   const { genrename } = req.params;
    //   const data = req.body;
  
    //   const insertGenre = await queryAsync(
    //     'update genre set genrename=? where genrename=?',
    //     [data.genrename, genrename]
    //   );
      res.json({message:'Not allowed :)'});
    } catch (err) {
      next(err);
    }
  };