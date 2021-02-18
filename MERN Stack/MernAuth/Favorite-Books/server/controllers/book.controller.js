const Book = require("../models/book.model");

module.exports.create = (req, res) => {
    Book.create(req.body)
        .then(book => res.json(book))
        .catch(err => console.log(err));
}

module.exports.allBooks = (req, res) => {
    Book.find({})
        .then(books => res.json(books))
        .catch(err => console.log(err));
}