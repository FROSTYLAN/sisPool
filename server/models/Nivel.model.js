const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Nivel = db.define(
  'Nivel',
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
    ABREVIATURA: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Nivel };
