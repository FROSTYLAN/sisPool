const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Cargo = db.define(
  'Cargo',
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

module.exports = { Cargo };
