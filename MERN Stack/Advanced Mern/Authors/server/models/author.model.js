const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name:   {
        type: String,
        minLength: [3, "This is too short"]
    }
}, {timestamps: true})

module.exports.Author = mongoose.model("Author", AuthorSchema);