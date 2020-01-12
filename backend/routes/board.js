const express = require('express');
const board = require('../controllers/board'); //? 절대경로(controllers/board) 할 방법이 있나요?  똑같이 .env랑 jsconfig.json 만들면 되나요? 해봤는데 잘 안되서요.
const route = express.Router();

// route.use('/', (req, res, next) => {
//   res.send('board');
// });

// REST를 효과적으로 관리하기 위해 controllers 폴더 추가
route.post('/', board.boardWrite);
route.get('/', board.boardRead);
route.delete('/', board.boardDelete);
route.put('/', board.boardChange);

module.exports = route;
