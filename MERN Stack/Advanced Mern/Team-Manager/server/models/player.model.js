const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    position: String,
    games:{
        type: Array,
        default: [
    {
        name: {type: String, default: "Game_1"},
        status: {type: Number, default: 0}
    },
    {
        name: {type: String, default: "Game_2"},
        status: {type: Number, default: 0}
    },
    {
        name: {type: String, default: "Game_3"},
        status: {type: Number, default: 0}
    }
    ]}
}, {timestamps:true})

const Player = mongoose.model("Player", PlayerSchema);


module.exports = Player;