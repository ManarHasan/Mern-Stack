const PlayerController = require('../controllers/player.controller')

module.exports = (app) => {
    app.post("/api/add-player", PlayerController.createPlayer);
    app.get("/api/all-players", PlayerController.allPlayers);
    app.post("/api/player/:id", PlayerController.updateStatus);
}