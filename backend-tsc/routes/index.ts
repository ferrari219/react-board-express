import { Router } from 'express';
const route = Router();
const board = require('./board');

route.use('/board', board);

export = route;
