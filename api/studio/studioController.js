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