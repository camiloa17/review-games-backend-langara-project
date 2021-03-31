const { queryAsync } = require('../../database/asyncQuery');

exports.getStudios = async (req, res, next) => {
  try {
    const studios = await queryAsync(
      'select * from game_studio'
    );
    res.json(studios);
  } catch (err) {
    next(err);
  }
};

exports.getAStudio = async (req, res, next) => {
  try {
    const { studioname } = req.params;
    const studio = await queryAsync(
      'select * from game_studio where studioname=? ',
      [studioname]
    );
    res.json(studio);
  } catch (err) {
    next(err);
  }
};

exports.createAStudio = async (req, res, next) => {
  try {
    const data = req.body;
    const insertStudio = await queryAsync(
      'insert into game_studio(studioname) values(?)',
      [data.studioname]
    );

    res.json(insertStudio);
  } catch (err) {
    next(err);
  }
};

exports.deleteAStudio = async (req, res, next) => {
  try {
    const { studioname } = req.params;
    const deletedStudio = await queryAsync('delete from game_studio where studioname=? ', [
        studioname,
    ]);
    res.json(deletedStudio);
  } catch (err) {
    next(err);
  }
};

exports.updateAStudio = async (req, res, next) => {
  try {
    const {studioname } = req.params;
    const data = req.body;
    

    const insertStudio = await queryAsync(
      'update game_studio set studioname=? where studioname=?',
      [data.studioname, studioname]
    );
    res.json(insertStudio);
  } catch (err) {
    next(err);
  }
};


exports.getAllDirectors=async(req,res,next)=>{
  try {
    
    const directors = await queryAsync('select * from studio_director');
    res.json(directors);
  } catch (err) {
    next(err);
  }
}

exports.getAllDirectorsDirectingAGame=async(req,res,nex)=>{
  try {
    
    const directors = await queryAsync('SELECT COUNT(DISTINCT studioDirector) as directors FROM game');
    res.json(directors)
  } catch (err) {
    next(err)
  }
}

exports.addDirector = async(req,res,next)=>{
  try {
    const {studioname } = req.params;
    const data = req.body;

    const insertDirector = await queryAsync(
      'insert studio_director(gameStudio,directorname) values(?,?)',
      [studioname,data.directorname]
    );
    res.json(insertDirector);
  } catch (err) {
    next(err);
  }
}

exports.gameStudioMadeAGame = async(req,res,next)=>{
  try {
    
    const games = await queryAsync('SELECT COUNT(DISTINCT gameStudio) as studios FROM game');
    res.json(games);
  } catch (err) {
    next(err)
  }
}