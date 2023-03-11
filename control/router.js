const express = require('express');
const subscriberRoutes = require("./subscriber/subscriberRoutes");
const authorContentRoutes = require("./authorContent/authorContentRoutes")

const app = express.Router();

app.use('/subscriber',subscriberRoutes);
app.use('/author-content',authorContentRoutes)

module.exports = app;