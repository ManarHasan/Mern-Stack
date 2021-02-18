const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();
require('./config/mongoose.config');
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
require('dotenv').config();
const port = 8000;
require('./routes/favorite-books.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`))