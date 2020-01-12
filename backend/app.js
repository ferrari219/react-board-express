const express = require('express');
const route = require('./routes');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//DB연결 작업
const sequelize = require('./models').sequelize;
sequelize.sync();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/', (req, res, next) => {
//   res.send('root');
//   //console.log('express middleware'); //console.log 안보이는 이유?
// });

app.use('/', route);
//에러처리 next(err)
console.log('3000port');
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
  console.log('4000port');
});
