const Sequelize = require('sequelize');
const PlayerModel = require('../models/player.js');
const LeagueModel = require('../models/league.js');
const GameModel = require('../models/game.js');
const StatModel = require('../models/stat.js')

const sequelize = new Sequelize('destroying_friendships', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})

const Op = Sequelize.Op;
const Player = PlayerModel(sequelize, Sequelize);
const League = LeagueModel(sequelize, Sequelize);
const Game = GameModel(sequelize, Sequelize);
const Stat = StatModel(sequelize, Sequelize);
const PlayerLeague = sequelize.define('PlayerLeague',{});
//creating relationships in sequelize
League.hasMany(Game,{as: 'Games'});
Player.belongsToMany(League,{ through: 'PlayerLeague' });
League.belongsToMany(Player,{ through: 'PlayerLeague' });
Game.hasMany(Stat, {as:'GameStats'});
Player.hasMany(Stat,{as:'PlayerStats'});

//if force is true it will reinitialize the tables!! USE WHEN CHANGING MODELS
sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
    Player,
    Game,
    League,
    Stat,
    Op,
}