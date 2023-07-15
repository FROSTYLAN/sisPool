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
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    MONTO: {
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
    STATUS: {
      type: DataTypes.ENUM('actived', 'deleted'),
      defaultValue: 'actived',
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Tarifa };
