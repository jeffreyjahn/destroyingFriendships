const { Player, Game, Stat, League } = require('../config/sequelize')
const bcrypt = require('bcrypt')

module.exports={
    getAllStats:(req,res)=>{
        Stat.findAll({}).then(stats=>{
            if(stats.length ===0){
                return res.json({errors:"No stats here."});
            } else{
                return res.json(stats);
            }
        })
    },
    getPlayersStats:(req,res)=>{
        Stat.findAll({where:{playerId:req.params.player_id}}).then(stats=>{
            if(stats.length ===0){
                return res.json({errors:"This player has no stats."});
            } else{
                return res.json(stats);
            }
        })
    },
    getGamesStats :(req,res)=>{
        Stat.findAll({where:{gameId:req.params.game_id}}).then(stats=>{
            if(stats.length===0){
                return res.json({errors:"This Game has no stats."})
            } else{
                return res.json(stats);
            }
        })
    },
    createStats:(req,res)=>{
        Stat.create({playerId:req.params.player_id, gameId:req.params.game_id}).then(stat=>{
            return res.json(stat);
        })
    },
    updateStats:(req,res)=>{
        Stat.update({})
    }
}