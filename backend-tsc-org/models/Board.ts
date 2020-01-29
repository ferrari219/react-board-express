export = (sequelize, DataTypes) => {
  return sequelize.define(
    //MySQL에 boards라는 table을 생성해주는 기능
    'board', //boards 테이블 생성
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
      },
      imgUrl: {
        type: DataTypes.STRING(100)
      }
    },
    { timestamps: true } //시간
  );
};
