const { Team } = require('../models/team');
const _ = require('lodash');

exports.compareTeamStocks = (team) => {
    return new Promise(async (resolve, reject) => {
        let teamStocks = [];
        let isValid = true;
        team.stocks.forEach(a => {
            if (a.responsibility == 'Vc1' || a.responsibility == 'Vc2')
                teamStocks.push({ stockId: a.stocksId, responsibility: 'Vc' });
            else
                teamStocks.push({ stockId: a.stocksId, responsibility: a.responsibility });
        });
        const teams = await Team.find({ playerId: team.playerId, matchId: team.matchId, softDelete: '0' });
        teams.forEach(item => {
            let itemStocks = [];
            item.stocks.forEach(a => {
                if (a.responsibility == 'Vc1' || a.responsibility == 'Vc2')
                    itemStocks.push({ stockId: a.stocksId, responsibility: 'Vc' });
                else
                    itemStocks.push({ stockId: a.stocksId, responsibility: a.responsibility });
            });
            if (compareArraysOfObjects(itemStocks, teamStocks)) isValid = false
        })
        resolve(isValid);
        reject(new Error());
    });
}

function compareArraysOfObjects(array1, array2) {
    return _(array1).differenceWith(array2, _.isEqual).isEmpty();
}