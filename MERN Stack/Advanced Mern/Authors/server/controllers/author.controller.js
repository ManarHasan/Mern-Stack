const {Author} = require("../models/author.model");

module.exports.getAuthors = (request, response) => {
    Author.find({}).sort({name: 1})
        .then(allAuthors => response.json(allAuthors))
        .catch(err => response.json({message: "Something went wrong", error: err}));
};

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
};

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err));
};

module.exports.findAuthor = (request, response) => {
    Author.find({_id: request.params.id})
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
};

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err));
}
