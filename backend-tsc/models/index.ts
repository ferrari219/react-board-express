const Sequelize = require('sequelize');
const config = require('../config/config');
const db: any = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  }
);

db.sequelize = sequelize; //내가 만든 DB
db.Sequelize = Sequelize; //Sequelize를 가져올 DB

//생성할 DB테이블 연결
const Board = require('./Board')(sequelize, Sequelize);
db.Board = Board;

export = db;
