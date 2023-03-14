const express = require("express");
const { addNewCategory, getAllCategory, removeCategory } = require("./category");

const app = express.Router();

app.post("/add-new-category", addNewCategory);
app.get("/get-all-category", getAllCategory);
app.delete("/remove-category/:id",removeCategory)

module.exports = app;
