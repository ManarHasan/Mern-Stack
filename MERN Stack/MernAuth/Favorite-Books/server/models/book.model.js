const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    name: String,
}, {timestamps:true})

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;