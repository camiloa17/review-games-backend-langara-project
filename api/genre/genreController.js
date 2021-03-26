const { queryAsync } = require('../../database/asyncQuery');

exports.getGenres = async (req, res, next) => {
  try {
    const genres = await queryAsync(
      'select * from genre'
    );
    res.json(genres);
  } catch (err) {
    next(err);
  }
};

exports.getAGenre = async (req, res, next) => {
  try {
    const { genrename } = req.params;
    const genre = await queryAsync(
      'select * from genre where genrename=? ',
      [genrename]
    );
    res.json(genre);
  } catch (err) {
    next(err);
  }
};

exports.createAGenre = async (req, res, next) => {
  try {
    const data = req.body;
    const insertGenre = await queryAsync(
      'insert into genre(genrename) values(?)',
      [data.genrename]
    );

    res.json(insertGenre);
  } catch (err) {
    next(err);
  }
};

exports.deleteAGenre = async (req, res, next) => {
  try {
    const { genrename } = req.params;
    const deletedGenre = await queryAsync('delete from genre where genrename=? ', [
        genrename,
    ]);
    res.json(deletedGenre);
  } catch (err) {
    next(err);
  }
};

exports.updateAGenre = async (req, res, next) => {
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