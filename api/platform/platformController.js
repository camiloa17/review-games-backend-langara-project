const { queryAsync } = require('../../database/asyncQuery');

exports.getPlatforms = async (req, res, next) => {
  try {
    const platforms = await queryAsync('select * from platform');
    res.json(platforms);
  } catch (err) {
    next(err);
  }
};

exports.getAPlatform = async (req, res, next) => {
  try {
    const { platformName } = req.params;
    const platform = await queryAsync(
      'select * from platform where platformName=? ',
      [platformName]
    );
    res.json(platform);
  } catch (err) {
    next(err);
  }
};

exports.createAPlatform = async (req, res, next) => {
  try {
    const data = req.body;
    const insertPlatform = await queryAsync(
      'insert into platform(platformName) values(?)',
      [data.platformName]
    );

    res.json(insertPlatform);
  } catch (err) {
    next(err);
  }
};

exports.deleteAPlatform = async (req, res, next) => {
  try {
    const { platformName } = req.params;
    const deletedPlatform = await queryAsync(
      'delete from platform where platformName=? ',
      [platformName]
    );
    res.json(deletedPlatform);
  } catch (err) {
    next(err);
  }
};

exports.updateAPlatform = async (req, res, next) => {
  try {
    const { platformName } = req.params;
    const data = req.body;

    const insertPlatform = await queryAsync(
      'update platform set platformName=? where platformName=?',
      [data.platformName, platformName]
    );
    res.json(insertPlatform);
  } catch (err) {
    next(err);
  }
};

exports.getPlatformWithMaxGames = async (req, res, next) => {
  try {
    const query = `SELECT 
    platform, COUNT(gp.gameID) AS number
FROM
    game g,
    game_platform gp
WHERE
    g.gameID = gp.gameID
GROUP BY platform
HAVING number = (SELECT 
        MAX(number)
    FROM
        (SELECT 
            platform, COUNT(gp.gameID) AS number
        FROM
            game g, game_platform gp
        WHERE
            g.gameID = gp.gameID
        GROUP BY platform) AS maxplatform)`;
    const getMaxPlatform = await queryAsync(query);
    res.json(getMaxPlatform);
  } catch (err) {
    next(err);
  }
};

exports.numberOfGames = async (req, res, next) => {
  try {
    const query = `SELECT 
    platform, COUNT(gp.gameID) AS number
FROM
    game g, game_platform gp
WHERE
    g.gameID = gp.gameID
GROUP BY platform
`;
    const getGamesByPlatform = await queryAsync(query);
    res.json(getGamesByPlatform);
  } catch (err) {
    next(err);
  }
};
