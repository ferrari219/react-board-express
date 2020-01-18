const Sequelize = require('sequelize');
const config = require('../config/config');
const db: any = {}; //DB를 넣을 빈 폴더
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    //host랑 dialect는 무조건 객체로 넣어야함
    host: config.host,
    dialect: config.dialect
  }
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//생성할 DB테이블 연결
const Board = require('./Board')(sequelize, Sequelize);
db.Board = Board;

export = db;
