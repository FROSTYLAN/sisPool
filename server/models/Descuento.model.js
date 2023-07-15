const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Descuento = db.define(
  'Descuento',
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
    MONTO_DSCTO: {
      type: DataTypes.FLOAT,
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

module.exports = { Descuento };
