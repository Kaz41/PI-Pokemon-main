const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    health: {
      type: DataTypes.DOUBLE
    },
    attack: {
      type: DataTypes.DOUBLE
    },
    defense: {
      type: DataTypes.DOUBLE
    },
    speed: {
      type: DataTypes.DOUBLE
    },
    height: {
      type: DataTypes.DOUBLE
    },
    weight: {
      type: DataTypes.DOUBLE
    },
  });
};
