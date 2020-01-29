import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as methodOverride from 'method-override';
import * as cookieParser from 'cookie-parser';

const route = require('./routes');
const app = express();
//DB연결
const sequelize = require('./models').sequelize;
sequelize.sync();

app.use(methodOverride());
app.use(cors());
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
