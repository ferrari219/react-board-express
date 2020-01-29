import { Router } from 'express';

const board = require('../controllers/board');
const auth = require('../controllers/auth');
const route = Router();

route.post('/', board.boardWrite);
route.get('/', board.boardReadAll);
route.get('/:id', auth.userCheck, board.boardReadOne);
route.delete('/:id', board.boardDelete);
route.put('/:id', auth.userCheck, board.boardChange);
// route.put('/:id', auth.userCheck, board.boardChange);
// route.put('/:id', board.boardChange);

export = route;
