const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('type',{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
    },{
      timestamps: false
    })
}