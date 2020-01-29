import { Router } from 'express';

const auth = require('../controllers/auth');
const route = Router();

route.post('/login', auth.login);
route.post('/duplicateCheck', auth.duplicateCheck);
route.post('/join', auth.join);
// route.get('/', auth.boardReadAll);
// route.get('/:id', board.boardReadOne);
// route.delete('/:id', board.boardDelete);
// route.put('/:id', board.boardChange);
// route.put('/:id', board.boardChange);

export = route;
