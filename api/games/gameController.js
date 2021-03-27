const { queryAsync } = require('../../database/asyncQuery');

exports.getGames = async (req, res, next) => {
  try {
    const query=`
    select 
    g.gameID,
    g.gamename,
    g.genre, 
    g.numberOfPLayers,
    g.budget,
    g.gameStudio,
    g.cover,
    g.minRequirements,
    group_concat(gp.platform separator ', ') as platforms,
    gp.releaseDate 
    from game g,game_platform gp 
    where g.gameID=gp.gameID group by 
    g.gameID,
    g.gamename,
    g.genre, 
    g.numberOfPLayers,
    g.budget,
    g.gameStudio,
    g.cover,
    g.minRequirements,
    gp.releaseDate`;
    const games = await queryAsync(
      query
    );
    res.json(games);
  } catch (err) {
    next(err);
  }
};

exports.getAGame = async (req, res, next) => {
  try {
    const { gameid } = req.params;
    const query=`
    select 
    g.gameID,
    g.gamename,
    g.genre, 
    g.numberOfPLayers,
    g.budget,
    g.gameStudio,
    g.cover,
    g.minRequirements,
    group_concat(gp.platform separator ', ') as platforms,
    gp.releaseDate 
    from game g,game_platform gp 
    where  g.gameID=gp.gameID and g.gameID=?
    group by 
    g.gameID,
    g.gamename, 
    g.genre,
    g.numberOfPLayers,
    g.budget,
    g.gameStudio,
    g.cover,
    g.minRequirements,
    gp.releaseDate`
    const games = await queryAsync(
      query,
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

    const platforms = insertData.slice(
      insertData.length - 2,
      insertData.length - 1
    )[0];
    const date = insertData[insertData.length - 1];

    const insertGame = await queryAsync(
      'insert into game(genre,gamename,numberOfPlayers,budget,gameStudio,cover,minRequirements) values(?,?,?,?,?,?,?)',
      insertData.slice(0, insertData.length - 2)
    );
    let values = [];
    let insertValues =[];
    
    for (platform of platforms) {
      values = [...values, insertGame.insertId, platform, date];
    }

    for(let y=0;y<platforms.length;y++){
      insertValues[y]='(?,?,?)';
    }
    
    const query = `insert into game_platform(gameID,platform,releaseDate) values ${insertValues.join(',')}`;
    
    const platformInsert=await queryAsync(query, values);
    res.json({insertGame,platformInsert});
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
    const platforms = insertData.slice(
      insertData.length - 2,
      insertData.length - 1
    )[0];
    
    const updateGame= await queryAsync(
      'update game set genre=?,gamename=?,numberOfPlayers=?, budget=?,gameStudio=?,cover=?,minRequirements=? where gameID=?',
      [...insertData.slice(0, insertData.length - 2), gameid]
    );

   const deletedRel= await queryAsync('delete from game_platform where gameID=?',[gameid]);
    let values = [];
    let insertValues =[];
    const date = insertData[insertData.length - 1];
  
    for (platform of platforms) {
      values = [...values, gameid, platform, date];
    }

    for(let y=0;y<platforms.length;y++){
      insertValues[y]='(?,?,?)';
    }
    
    const query = `insert into game_platform(gameID,platform,releaseDate) values ${insertValues.join(',')}`;
    
    const platformInsert=await queryAsync(query, values);
    res.json({updateGame,deletedRel,platformInsert});
  } catch (err) {
    next(err);
  }
};
