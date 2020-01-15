const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {}; //DB를 넣을 빈 폴더
// console.log(config.database);
// console.log(config.dialect);

// sequelize 내가 만든 MySQL
// Sequelize 내가 받은 Sequelize 모듈 자체
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
const Board = require('./Board')(sequelize, Sequelize);
const User = require('./User')(sequelize, Sequelize);
// User.hasMany(Board, { as: 'BoardId' });
db.User = User;
db.Board = Board;

module.exports = db;
