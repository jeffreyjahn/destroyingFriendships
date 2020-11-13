const _ = require('lodash');
const LeagueController = require('../controllers/League.controller');
const { League } = require('../models/League.model');

// /api/leagues
exports = (app) => {
    app.get('/', LeagueController.getLeagues);

    app.post('/', LeagueController.createLeague)

    app.post('/login', LeagueController.loginLeague);

    app.get('/:league_id', LeagueController.getLeague);
    
    app.put('/:league_id', LeagueController.updateLeague);

    app.delete('/:league_id', LeagueController.deleteLeague);
}