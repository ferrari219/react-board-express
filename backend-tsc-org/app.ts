import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as methodOverride from 'method-override';
import * as cookieParser from 'cookie-parser';
// const aws = require('aws-sdk');
// const config = require('./config/config');
const route = require('./routes');
const app = express();
//DB연결
const sequelize = require('./models').sequelize;
sequelize.sync();

// aws.config.update({
//   secretAccessKey: config.AWS_ACCESS_KEY_ID,
//   accessKeyId: config.AWS_SECRET_KEY_ID,
//   region: 'ap-northeast-2'
// });
const corsOpiton = {
  origin: 'http://localhost:3000',
  credentials: true
};
app.use(methodOverride());
app.use(cors(corsOpiton));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.listen(4000, () => {
  console.log('backend: 4000');
});
