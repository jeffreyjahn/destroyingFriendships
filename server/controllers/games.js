const { Player, Game, Stat, League } = require('../config/sequelize')
const bcrypt = require('bcrypt')

module.exports={
    //creating game
    getGames :(req,res)=>{
        console.log("Finding all games!");
        Game.findAll({}).then(games=>{
            if (games.length>0){
                console.log("Found all games!");
                console.log(games);
                return res.json(games)
            } else{
                return res.json({errors:"No games!"})
            }
        });
    },
    getGame : (req,res)=>{
        console.log("Finding one game!");
        Game.find({where:{id:req.params.game_id}}).then(game=>{
            console.log("found a game");
            if(game.length >1 || !game){
                return res.json({errors:"Too many games or no games."})
            }else{
                console.log("Found this game!");
                return res.json(game);
            }
        })
    },
    createGame : (req,res)=>{
        League.find({where:{id: req.params.league_id}}).then(league=>{
            console.log("Finding league to create game.");
            if(league.length === 0){
                return res.json({errors: "No league."})
            } else{
                Game.create({status:"ongoing"}).then(game=>{
                    console.log("Creating a new game.");
                    game.setLeague(league);
                    game.save().then(game=>{
                        return res.json(game);
                    })
                })
            }
        })
    },
    endGame : (req,res)=>{
        Game.find({where:{id: req.params.game_id}}).then(game=>{
            console.log("Ending game with stats.");
            if(game.length == 0){
                return res.json({errors:"No game found"});
            }else{
                console.log("Game has ended.");
                game.update({status:"ended"}).then(game=>{return res.json(game)});
            }
        })
    },
    deleteGame :(req,res)=>{
        console.log("Deleting game.");
        Game.destroy({
            where:{
                id: req.params.game_id
            }
        }).then(rowDeleted=>{
            if(rowDeleted === 1){
                console.log("Deleted Successfully");
                return res.json({success:"Deleted Successfully"});
            }
        }, err=>{
            console.log(err);
            return res.json({errors:err});
        })
    }
}