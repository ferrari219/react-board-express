module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      username: {
        type: DataTypes.STRING(20),
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      password: { type: DataTypes.STRING(100), allowNull: false },
      age: {
        type: DataTypes.INTEGER
      }
    },
    { timestamps: true }
  );
};
