const  express  = require("express");
const authorNote  = require('./authorContent');

const app = express.Router();

app.post("/author-note", authorNote);

module.exports = app;
