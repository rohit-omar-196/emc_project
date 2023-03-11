const express = require('express');
const {newSubscriber,removeSubscriber} = require('./subscribe');

const app = express.Router();

app.post('/newSubscriber',newSubscriber);
app.delete('/removeSubscriber',removeSubscriber);

module.exports = app;