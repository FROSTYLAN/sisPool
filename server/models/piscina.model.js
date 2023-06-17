const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Piscina = db.define(
  'Piscina',
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
  },
  {
    timestamps: false,
  }
);

module.exports = { Piscina };
