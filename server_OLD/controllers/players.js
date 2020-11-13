const { Player, Game, Stat, League, Op} = require('../config/sequelize')
const bcrypt = require('bcrypt')

module.exports={
    getPlayers:(req, res)=>{
        Player.findAll({
            include:[{
                model:League,
                through:{
                    attributes:['leagueId','playerId']
                }
            }]
        }).then(players=>{
            if(players.length ==0){
                return res.json({errors:"No players here."})
            } else{
                return res.json(players);
            }
        })
    },
    getOtherPlayers:(req, res)=>{
        Player.findAll({
            where:{
                leagueId:{
                    [Op.ne]: req.session.league_id
                }
            },
            include:[{
                model:League,
                attributes: { exclude: ['password'] },
                through:{
                    attributes:['leagueId','playerId']
                }
            }]
        }).then(players=>{
            if(players.length ==0){
                return res.json({errors:"No players here."})
            } else{
                return res.json(players);
            }
        })
    },
    getPlayer:(req,res)=>{
        Player.findAll({
            where:{id:req.params.player_id},
            include:[{
                model:League,
                attributes: { exclude: ['password'] },
                through:{
                    attributes:['leagueId','playerId']
                }
            }]
        }).then(player=>{
            if(player === undefined || player.length ==0){
                return res.json({errors:"Player does not exist"});
            } else{
                return res.json(player);
            }
        })
    },
    createPlayer:(req,res)=>{
        Player.findAll({where:{name: req.body.name}}).then(player=>{
            if (player.length===0){
                Player.create({name:req.body.name}).then(player=>{
                    return res.json(player);
                })
            } else{
                return res.json({errors:"Player with name exists."})
            }
        })
    },
    //user.addProject(project, { through: { status: 'started' }})
    joinLeague:(req,res)=>{
        League.find({where:{id:req.params.league_id}}).then(league=>{
            console.log(league);
            if (league.length > 0){
                Player.find({where:{id:req.params.player_id}}).then(player=>{
                    if(player.length>0){
                        player.addLeague(league);
                        return res.json({success:"Player joined the league"})
                    } else{
                        return res.json({errors:"Password is incorrect."});
                    }
                })
            }
        })
    }
}