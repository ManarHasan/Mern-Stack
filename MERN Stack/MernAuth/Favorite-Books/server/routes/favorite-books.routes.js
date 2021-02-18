const UserController = require("../controllers/user.controller");
const BookController = require("../controllers/book.controller")

module.exports = function (app) {
    app.post("/api/register", UserController.register);
    app.post("/login", UserController.login);
    app.post("/api/book", BookController.create);
    app.get("/allBooks", BookController.allBooks);
    app.put("/add/:id", UserController.addBook);
}