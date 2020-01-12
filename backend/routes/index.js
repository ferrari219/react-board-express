const express = require('express');
const board = require('./board');
const route = express.Router();

route.use('/board', board);

module.exports = route;
