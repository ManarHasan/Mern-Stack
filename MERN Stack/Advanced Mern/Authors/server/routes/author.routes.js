const AuthorController = require("../controllers/author.controller");

module.exports = function (app) {
    app.get("/api/all-authors", AuthorController.getAuthors);
    app.post("/api/author", AuthorController.createAuthor);
    app.get("/api/author/:id", AuthorController.findAuthor);
    app.put("/api/author/:id", AuthorController.updateAuthor);
    app.delete("/api/delete/:id", AuthorController.deleteAuthor)
}