const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Turno = db.define(
  'Turno',
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IDDÍAS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Días', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Turno };
