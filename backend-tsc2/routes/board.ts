import { Router } from 'express';

const board = require('../controllers/board');
const route = Router();

route.post('/', board.boardWrite);
route.get('/', board.boardRead);
route.delete('/', board.boardDelete);
route.put('/', board.boardChange);

export = route;
