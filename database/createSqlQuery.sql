CREATE TABLE genre(
    genrename VARCHAR(50) PRIMARY KEY
); 

CREATE TABLE platform(
    platformName VARCHAR(50) PRIMARY KEY
); 

CREATE TABLE game_studio(
    studioname VARCHAR(50) PRIMARY KEY
); 

CREATE TABLE studio_director(
    gameStudio VARCHAR(50),
    directorname VARCHAR(100) unique,
    PRIMARY KEY(gamestudio, directorname),
    FOREIGN KEY(gamestudio) REFERENCES game_studio(studioname) ON DELETE CASCADE ON UPDATE CASCADE
); 

CREATE TABLE employee(
    employeeID INT PRIMARY KEY AUTO_INCREMENT,
    employeename VARCHAR(50),
    age INT,
    yearsofexperience INT
); 


CREATE TABLE game(
    gameID INT PRIMARY KEY AUTO_INCREMENT,
    genre VARCHAR(50),
    gamename VARCHAR(50),
    numberOfPlayers INT,
    budget INT,
    cover TEXT,
    gameStudio VARCHAR(50),
    studioDirector VARCHAR(100),
    minRequirements VARCHAR(50),
    FOREIGN KEY(gameStudio) REFERENCES game_studio(studioname) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(genre) REFERENCES genre(genrename) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(studioDirector) REFERENCES studio_director(directorname) ON DELETE CASCADE ON UPDATE CASCADE
); 

CREATE TABLE game_review(
    reviewID INT PRIMARY KEY AUTO_INCREMENT,
    authorID INT,
    gameID INT,
    title VARCHAR(50),
    content TEXT,
    reviewerrating REAL,
    date_updated DATE,
    date_created DATE,
    FOREIGN KEY(GameID) REFERENCES game(gameID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(AuthorID) REFERENCES employee(employeeID) ON DELETE CASCADE ON UPDATE CASCADE
); 

CREATE TABLE Supervise(
    authorX_employeeID INT,
    authorY_employeeID INT,
    reviewID INT,
    PRIMARY KEY(
        authorX_employeeID,
        authorY_employeeID
    ),
    FOREIGN KEY(authorX_employeeID) REFERENCES employee(employeeID),
    FOREIGN KEY(authorY_employeeID) REFERENCES employee(employeeID),
    FOREIGN KEY(reviewID) REFERENCES game_review(reviewID)
); 

CREATE TABLE game_platform(
    gameID INT,
    platform VARCHAR(50),
    releaseDate DATE,
    PRIMARY KEY(gameID, platform),
    FOREIGN KEY(gameID) REFERENCES game(gameID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(platform) REFERENCES platform(platformName) ON DELETE CASCADE ON UPDATE CASCADE
);