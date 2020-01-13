module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    //MySQL에 boards라는 table을 생성해주는 기능
    'board', //boards라는 테이블이 생성됨
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      content: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    { timestamps: true }
  );
};
