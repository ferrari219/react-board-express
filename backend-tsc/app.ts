import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as methodOverride from 'method-override';

const route = require('./routes');
const app = express();

//DB연결
const sequelize = require('./models').sequelize;
sequelize.sync();

//json 형태로 불러오기 위한 작업
app.use(methodOverride());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//route 연결
app.use('/', route);

// 에러처리: next(err);
app.use((err, req, res, next) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  res.status(err.statusCode).json({
    errMessage: err,
    success: false
  });
});

//서버 포트 생성
app.listen(4000, () => {
  console.log('backend: 4000');
});