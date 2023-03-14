const express = require('express');
const subscriberRoutes = require("./subscriber/subscriberRoutes");
const authorContentRoutes = require("./authorContent/authorContentRoutes")
const categoryRoutes = require('./category/categoryRoutes')

const app = express.Router();

app.use('/subscriber',subscriberRoutes);
app.use('/author-content',authorContentRoutes);
app.use('/category',categoryRoutes)

module.exports = app;