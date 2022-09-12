const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo;
    sequelize.define('type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    })
};