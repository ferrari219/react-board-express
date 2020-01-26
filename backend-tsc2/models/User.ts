export = (sequelize, DataTypes) => {
  return sequelize.define(
    //MySQL에 boards라는 table을 생성해주는 기능
    'user', //boards 테이블 생성
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { timestamps: true } //시간
  );
};
