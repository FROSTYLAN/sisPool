const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Tarifa = db.define(
  'Tarifa',
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TIPO: {
      type: DataTypes.ENUM('mensual', 'especial'),
      allowNull: false,
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    MONTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    MONTO_CLASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    FECHAINICIO: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    FECHAFINAL: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Tarifa };
