import { Router } from 'express';

const board = require('../controllers/board');
const route = Router();

// route.use('/', () => {
//   console.log('/routes/board연결');
// });

//REST API 형태로 연결
route.post('/', board.boardWrite);
route.get('/', board.boardRead);
route.get('/:id?', board.boardReadOne);
route.delete('/:id?', board.boardDelete);
route.put('/:id?', board.boardChange);

export = route;
