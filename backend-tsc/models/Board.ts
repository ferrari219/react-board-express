export = (sequelize, DataTypes) => {
  return sequelize.define(
    'board', //mysql DB에 boards 라는 테이블이 생성됨
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, //자동 넘버링
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(20),
        allowNull: false //필수 입력값이 됨
      },
      content: {
        type: DataTypes.STRING(100),
        allowNull: false //필수 입력값이 됨
      }
    },
    { timestamps: true } //시간이 자동 입력됨
  );
};
