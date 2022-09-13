const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      // type: DataTypes.UUID,
      // defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    // },
    // idPoke: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{
      type: DataTypes.TEXT
    },
    hp:{
      type: DataTypes.INTEGER
    },
    attack:{
      type: DataTypes.INTEGER
    },
    defense:{
      type: DataTypes.INTEGER
    },
    sp_attack:{
      type: DataTypes.INTEGER
    },
    sp_defense:{
      type: DataTypes.INTEGER
    },
    speed:{
      type: DataTypes.INTEGER
    },
    height:{
      type: DataTypes.DECIMAL
    },
    weight:{
      type: DataTypes.DECIMAL
    },
  },{
    timestamps: false
  });
};
