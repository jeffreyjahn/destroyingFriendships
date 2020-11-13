
const path = require('path');
const LeagueRouter = require('./League.route');

module.exports = (app) => {
    //league routes    
    app.use('/api/leagues', LeagueRouter(app));
    
    // getting players not in league
    app.get('/api/other_players', (req,res) => {
        player.getOtherPlayers(req,res);
    })

    //player routes
    app.get('/api/players', (req,res) => {
        player.getPlayers(req,res);
    })
    app.get('/api/players/:player_id',(req,res) => {
        player.getPlayer(req,res);
    })
    app.post('/api/players', (req, res) => {
       player.createPlayer(req,res);
    })
    app.get('/api/players/:player_id/leagues/:league_id',(req,res) => {
        player.joinLeague(req,res);
    })

    //game routes
    app.get('/api/games',(req,res) => {
        game.getGames(req,res);
    })
    app.get('/api/games/:game_id',(req,res) => {
        game.getGame(req,res);
    })
    //creating a new game
    app.post('/api/leagues/:league_id/games',(req,res) => {
        game.createGame(req,res);
    })
    // deleting a game
    app.delete('/api/games/:game_id',(req,res) => {
        game.deleteGame(req,res);
    })
    //finishing and saving stats of a game
    app.put('/api/games/:game_id',(req,res) => {
        game.endGame(req,res);
    })
    // catch-all route
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}