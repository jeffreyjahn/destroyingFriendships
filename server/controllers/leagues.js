const { Player, Game, Stat, League } = require('../config/sequelize')
const bcrypt = require('bcrypt')

module.exports={
    allLeagues:(req, res)=>{
        League.findAll({
            include:[{
                model:Player,
                through:{
                    attributes:['playerId','leagueId']
                }
            }]
        }).then(leagues=>{
                if(leagues.length == 0){
                    return res.json({errors: "No leagues!"})
                } else{
                    return res.json(leagues);
                }
        });
    },
    getLeague:(req, res)=>{
        League.findAll({
            where:{id: req.params.league_id},
            include:[{
                model:Player,
                through:{
                    attributes:['playerId','leagueId']
                }
            }]
        }).then(league=>{
            if(league.length == 0){
                return res.json({errors:"League already exists."});
            }else{
                return res.json(league);
            }
        })
    },
    updateLeague:(req,res)=>{
        League.findAll({
            where:{leagueName: req.body.leagueName}
        }).then(league=>{
            console.log(league);
            if(league.length > 0){
                return res.json({errors:"League already exists."});
            }else{
                League.update(
                    {leagueName: req.body.leagueName},
                    {where:{id: req.params.league_id}},
                ).then(rowsUpdated=>{
                    res.json(rowsUpdated);
                }).catch(()=>{
                    res.json({errors:"That league does not exist."})
                })
            }
        })
    },
    //creating a new league
    newLeague:(req,res)=>{
        errors=[];
        console.log("Creating a new League");
        console.log(req.body);
        League.findAll({
            where:{
                leagueName: req.body.leagueName
            }
        }).then(league=>{
            console.log(league);
            if(league.length > 0){
                errors.push("League already exists");
                return res.json({errors:errors});
            } else{
                console.log('Cool, no League found.')
                League.create({
                    leagueName: req.body.leagueName
                }).then(league=>{
                    return res.json(league);
                }).catch(error=>{
                    errors.push(error);
                    if (errors.length>0){
                        return res.json({errors:errors});
                    }
                })
            }
        })
    },
    //logging into a league as a manager
    // loginLeague:(req,res)=>{
    //     console.log(req.body);
    //     console.log("logging in!");
    //     League.findAll({
    //         where:{
    //             leagueName: req.body.leagueName
    //         }
    //     })
    //         .then(league=>{
    //             if(league === undefined || league.length == 0){
    //                 return res.json({errors:"League does not exist."});
    //             } else{
    //                 bcrypt.compare(req.body.password, league[0].password)
    //                 .then( result => {
    //                     if(result){
    //                         req.session.league_id = league.id;
    //                         return res.json({result:result});
    //                     } else{
    //                         return res.json({errors:"Password is incorrect."});
    //                     }
    //                 })
    //                 .catch( error => {
    //                 })
    //             }
    //     })
    // },
    //deleting a league
    deleteLeague:(req,res)=>{
        console.log("Delete bruh");
        League.findAll({
            where: {id:req.params.league_id}
        }).then(league=>{
            console.log(league);
            console.log("successfully deleting");
            Game.destroy({where:{leagueId: league[0].id}}).then(()=>{
                league[0].destroy({force:true});
                return res.json({success:"League is deleted."});
            })
        })
    }
}