const { queryAsync } = require('../../database/asyncQuery');

exports.getGames = async (req, res, next) => {
  try {
    const games = await queryAsync(
      'select * from game g,game_platform gp where g.gameID=gp.gameID'
    );
    res.json(games);
  } catch (err) {
    next(err);
  }
};

exports.getAGame = async (req, res, next) => {
  try {
    const { gameid } = req.params;
    const games = await queryAsync(
      'select * from game g,game_platform gp where g.gameID=gp.gameID and g.gameID=? ',
      [gameid]
    );
    res.json(games);
  } catch (err) {
    next(err);
  }
};

exports.createAGame = async (req, res, next) => {
  try {
    const data = req.body;
    const insertData = Object.values(data);

    const insertGame = await queryAsync(
      'insert into game(genre,gamename,numberOfPlayers,budget,gameStudio,minRequirements) values(?,?,?,?,?,?)',
      insertData.slice(0, insertData.length - 2)
    );

    await queryAsync(
      'insert into game_platform(gameID,platform,releaseDate) values(?,?,str_to_date(?,"%d-%m-%Y"))',
      [insertGame.insertId, data.platform, data.releaseDate]
    );
    res.json(insertGame);
  } catch (err) {
    next(err);
  }
};

exports.deleteAGame = async (req, res, next) => {
  try {
    const { gameid } = req.params;
    const deletedGames = await queryAsync('delete from game where gameID=? ', [
      gameid,
    ]);
    res.json(deletedGames);
  } catch (err) {
    next(err);
  }
};

exports.updateAGame = async (req, res, next) => {
  try {
    const { gameid } = req.params;
    const data = req.body;
    const insertData = Object.values(data);

    const insertGame = await queryAsync(
      'update game g,game_platform gp set g.genre=?,g.gamename=?,g.numberOfPlayers=?, g.budget=?,g.gameStudio=?,g.minRequirements=?, gp.platform=?,gp.releaseDate=str_to_date(?,"%d-%m-%Y") where g.gameID=gp.gameID and g.gameID=?',
      [...insertData, gameid]
    );
    res.json(insertGame);
  } catch (err) {
    next(err);
  }
};
