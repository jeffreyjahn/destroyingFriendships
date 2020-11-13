const _ = require('lodash');

class League {
    constructor(league) {
        if(!league || _.isEmpty(league))
            throw new Error('Invalid League');
        this.id = league.id;
        this.name = league.name;
        this.game = league.game;
        this.teams = league.teams;
        this.matches = league.matches;
    }
}
exports.League = League;

class LeagueQuery {
    constructor(name, game) {
        this.validate(name, game);
        this.name = name;
        this.game = game;
    }
    validate(name, game) {
        const errors = [];
        if(!name || !_.isString(name))
            errors.push('Name is invalid');
        if(!game || !_.isString(game))
            errors.push('Game is invalid');
        if(!_.isEmpty(errors))
            throw new Error(errors);
    }
}
exports.LeagueQuery = LeagueQuery;