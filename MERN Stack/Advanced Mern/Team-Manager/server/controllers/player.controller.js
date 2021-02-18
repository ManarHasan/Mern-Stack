const Player = require("../models/player.model");

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(player => res.json(player))
        .catch(err => console.log(err));
}

module.exports.allPlayers = (req, res) => {
    Player.find()
        .then(players => res.json(players))
        .catch(err => console.log(err));
}

module.exports.updateStatus = (req, res) => {
    const {counter, status} = req.body;
    let player = Player.find({id: req.params.id});
    if(status === "playing"){
        assert.equal(player.games[counter].status, 1)
    }
    else if(status === "not playing"){
        assert.equal(player.games[counter].status, 2)
    } else {
        assert.equal(player.games[counter].status, 0)
    }
    player.save();
}