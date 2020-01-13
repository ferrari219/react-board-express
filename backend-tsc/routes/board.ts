// import * as express from "express";
import { Router } from 'express'; //=> 이방식으로 express모듈 안의 Router객체를 가져와서 Router객체만 사용했습니다.

const board = require('../controllers/board'); //이 애들은 import로 바꾸면 안되나요?
// const board = require(`${__dirname}/controllers/board`); // 절대경로(controllers/board) 할 방법
const route = Router();

// REST를 효과적으로 관리하기 위해 controllers 폴더 추가
route.post('/', board.boardWrite);
route.get('/', board.boardRead);
route.delete('/', board.boardDelete);
route.put('/', board.boardChange);

export = route;
// export default route;
// module.exports = route;
// exports = { route };
