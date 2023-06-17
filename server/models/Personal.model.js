const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Personal = db.define(
  'Personal',
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DNI: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    APELLIDOS_NOMBRES: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DIRECCION: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TELEFONO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IDCARGO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Cargo', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Personal };
