const player = require('../controllers/players');
const game = require('../controllers/games');
const league = require('../controllers/leagues');
const stat =require('../controllers/stats');
const path = require('path');

module.exports=(app)=>{
    //league routes    
    app.get('/api/leagues',(req,res)=>{
        league.allLeagues(req,res);
    })

    app.post('/api/leagues',(req,res)=>{
        league.newLeague(req,res);
    })

    app.post('/api/leagues/login',(req,res)=>{
        league.loginLeague(req,res);
    })

    app.get('/api/leagues/:league_id',(req,res)=>{
        league.getLeague(req,res);
    })
    
    app.put('/api/leagues/:league_id',(req,res)=>{
        league.updateLeague(req,res);
    })

    app.delete('/api/leagues/:league_id',(req,res)=>{
        league.deleteLeague(req,res);
    })
    // getting players not in league
    app.get('/api/other_players', (req,res)=>{
        player.getOtherPlayers(req,res);
    })

    //player routes
    app.get('/api/players', (req,res)=>{
        player.getPlayers(req,res);
    })
    app.get('/api/players/:player_id',(req,res)=>{
        player.getPlayer(req,res);
    })
    app.post('/api/players', (req, res)=>{
       player.createPlayer(req,res);
    })
    app.get('/api/players/:player_id/leagues/:league_id',(req,res)=>{
        player.joinLeague(req,res);
    })

    //game routes
    app.get('/api/games',(req,res)=>{
        game.getGames(req,res);
    })
    app.get('/api/games/:game_id',(req,res)=>{
        game.getGame(req,res);
    })
    //creating a new game
    app.post('/api/leagues/:league_id/games',(req,res)=>{
        game.createGame(req,res);
    })
    // deleting a game
    app.delete('/api/games/:game_id',(req,res)=>{
        game.deleteGame(req,res);
    })
    //finishing and saving stats of a game
    app.put('/api/games/:game_id',(req,res)=>{
        game.endGame(req,res);
    })
    // catch-all route
    app.all('*', (req, res, next)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}