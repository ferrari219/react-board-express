import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
const route = require("./routes");
const app = express();

//DB연결 작업
const sequelize = require("./models").sequelize;
sequelize.sync();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", route);
//에러처리 next(err)
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
  console.log("4000port");
});
