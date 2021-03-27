INSERT INTO `employee` (`employeeID`, `employeename`, `age`, `yearsofexperience`) VALUES
(1, 'Stephen Asuncion', 32, NULL),
(2, 'Camilo Dominguez', 34, 8);
INSERT INTO `supervise` (`authorX_employeeID`, `authorY_employeeID`) VALUES
(1, 2),
(2, 1);
INSERT INTO `platform` (`platformName`) VALUES
('Nintendo'),
('PC'),
('Playstation'),
('Xbox');

INSERT INTO `genre` (`genrename`) VALUES
('Action'),
('Adventure'),
('Fighting'),
('MMORPG'),
('MOBA'),
('RPG'),
('Shooter'),
('Simulation');

INSERT INTO `game_studio` (`studioname`) VALUES
('Activision'),
('Bethesda'),
('Blizzard'),
('CD Projekt Red'),
('NCSoft'),
('NetherRealm Studios'),
('Nintendo'),
('Riot Games'),
('Square Enix');


INSERT INTO `game` (`gameID`, `genre`, `gamename`, `numberOfPlayers`, `budget`, `cover`, `gameStudio`, `minRequirements`) VALUES
(2, 'RPG', 'The Witcher 3 The Wild Hunt', 1, 3000000, 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg', 'CD Projekt Red', 'For pc it requires \nIntel 3 \nRam 8 gig\nGraphics Ca'),
(3, 'RPG', 'Final Fantasy 15', 1, 80000000, 'https://gamespot1.cbsistatic.com/uploads/scale_medium/536/5360430/3170692-ffxv.jpg', 'Square Enix', 'Ryzen 5 intel 3\nRam: 8 gigs\nHDD or SSD 80 gigs'),
(4, 'Shooter', 'Valorant', 1, 90000000, 'https://mir-s3-cdn-cf.behance.net/projects/max_808/e927d072156817.Y3JvcCw5OTcsNzgwLDAsMA.jpg', 'Riot Games', 'It requires:\nI5 or Ryzen 7\nRam 8 gigs\nSSD HD: 30Gi'),
(5, 'RPG', 'The Elder Scrolls V:Skyrim', 1, 95000000, 'https://gamespot1.cbsistatic.com/uploads/scale_medium/1197/11970954/2359363-2225907-skyrim.png', 'Bethesda', 'Ryzen 3, Intel 5\n8 gigs of Ram\nSSD 35 gigs\n'),
(6, 'Fighting', 'Inustice 2', 2, 55000000, 'https://www.centralcoastmobilegametheater.com/wp/wp-content/uploads/2020/01/27-1.jpg', 'NetherRealm Studios', 'An Xbox'),
(7, 'RPG', 'The Legend of Zelda: Breath of the Wild', 1, 90000000, 'https://gamespot1.cbsistatic.com/uploads/scale_medium/1197/11970954/3181241-ig-lozbreathofthewildrelease-20170112.jpg', 'Nintendo', 'A switch'),
(8, 'Adventure', 'Super Mario Odyssey', 2, 55000000, 'https://c.76.my/Malaysia/super-mario-odyssey-nintendo-switch-deanwong-1710-30-deanwong@1.jpg', 'Nintendo', 'A Switch');


INSERT INTO `game_platform` (`gameID`, `platform`, `releaseDate`) VALUES
(2, 'Nintendo', '2021-03-23'),
(2, 'PC', '2021-03-23'),
(2, 'Playstation', '2021-03-23'),
(2, 'Xbox', '2021-03-23'),
(3, 'PC', '2016-05-26'),
(3, 'Playstation', '2016-05-26'),
(3, 'Xbox', '2016-05-26'),
(4, 'PC', '2014-05-26'),
(5, 'PC', '2006-06-06'),
(6, 'Xbox', '2015-06-09'),
(7, 'Nintendo', '2017-06-15'),
(8, 'Nintendo', '2013-02-13');

INSERT INTO `game_review` (`reviewID`, `authorID`, `gameID`, `title`, `content`, `reviewerrating`, `date_updated`, `date_created`) VALUES
(1, 2, 2, 'The best RPG Ever', 'The Witcher 3: Wild Hunt ($59.99) is the final installment in the action RPG series by Polish video game studio CD Projekt Red. Geralt of Rivia sets out one last time to slay beasts, collect bounties, and protect the child of destiny. CD Projekt Red changes the game formula by introducing a massive, open world filled with monsters to hunt and quests to undertake. But it also greatly improves the series\'s combat by making alchemy more accessible and tightening the action controls. \n\nAt first glance, The Witcher 3 seems like your standard action/RPG hybrid. Geralt fights men and monsters alike with sword strikes and magical attacks, as you would in any game set in a fantasy universe. However, Geralt\'s strength lies in his versatility, and not his brute strength. Geralt is an accomplished fighter, but a group of armed thugs can easily make short work of him. It is the combination of swordplay and movement abilities, magical attacks, powerful sub-weapons, and potent potions that make Geralt the powerhouse that he is. The Witcher 3\'s combat is fast and thrilling, but also highly strategic. Making good use of Geralt\'s resources is always more productive than brandishing steel alone.', 1, '0000-00-00', '2021-03-26'),
(2, 1, 3, 'One Final Fantasy like no other.', 'Final Fantasy XV opens, quite fittingly, with a splash screen that reads: “A Final Fantasy for fans and first-timers.” Having played every numbered entry since the first, I can see both reverence for the old and a courtship of the new in this latest chapter. I’d like to say it’s an elegant fusion of the two, but in reality it’s more of a duality - a conflict that reaches into nearly every aspect of Final Fantasy XV. In the end, its beauty, charm, and commitment to the bond between its four protagonists keep it glued together, even when some of its design and story elements threaten to pull it apart.\n\nPrince Noctis and fellow travelers Gladiolus, Ignis, and Prompto aren’t a loosely assembled band of strangers uniting to face evil, like in so many other roleplaying games - they are close, long-time friends, and it’s this closeness that gives Final Fantasy XV’s often incoherent story all the heart it has. While the danger that befalls the land of Lucis never truly materializes until the end of the tale and the would-be romantic element of the story never gets more than a handful of weepy, insubstantial cutscenes, the mutual respect, understanding, and kinship of these four is fleshed out and reinforced beautifully whether in combat, on the road, or everywhere in between.\n\nFully real-time combat is the single biggest departure from the turn-based systems of the past, and while it doesn’t feel like the other main-line Final Fantasy games in any regard, the way it makes you and your three AI-controlled compatriots feel like a cohesive fighting unit kept it mostly enjoyable for me. Well-placed flanking strikes are rewarded with big damage and slickly animated team-up attacks, and commanding one of your buds to use one of their stylish-looking special attacks at just the right moment can be a literal blast. Especially here, the banter flies as they cheer each other on and pick one another up when they fall. They turn monster-slaying into family bonding time, and I love it.\n', 2.7, '0000-00-00', '2021-03-26'),
(3, 2, 4, 'The stripped-down Shooter', 'The company has wisely decided to shove just about everything that isn’t the gameplay to the side, making Valorant’s excellent mechanical design its most important feature.\n\nThis approach makes sense. Valorant is Riot’s first game since it released the ultra-popular League of Legends in 2009, and that release taught Riot some important lessons. You can improve character selection, balance, map design, and just about every other aspect of the experience over time, but you have to start with a base that’s absolutely rock-solid to have any hope of the game taking root over the long-term.\n\nAnd Valorant’s base, the action that’s going to support all those possible future additions, is about as solid as anything I’ve seen in the competitive scene.', 4.3, '0000-00-00', '2021-03-26'),
(4, 1, 7, 'A Breathtaking experience', 'My “top five games of all time” list has remained locked for years. The order can fluctuate, but Super Mario 3, Super Mario World, Metal Gear Solid, Ocarina of Time and Dark Souls have stood firm, despite all the other amazing titles there have been in that time.\n\nSo, when I say Legend of Zelda: Breath of the Wild not only gatecrashes the list, but probably beats the lot as the greatest of them all, I hope you realize how serious an achievement it is. Whatever your feelings on the Nintendo Switch, it’s arguably one of the greatest launch games for any console ever. It’s that good.', 4.9, '0000-00-00', '2021-03-26');
