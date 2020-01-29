import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

const app = express();
const route = require('./routes');

//DB연결
const sequelize = require('./models').sequelize;
sequelize.sync();

//json 형태로 불러오기 위한 작업
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//route 연결
app.use('/', route);

//서버 포트 생성
app.listen(4000, () => {
  console.log('backend:4000port');
});
