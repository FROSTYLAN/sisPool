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
    IDDIAS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Dia', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
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

module.exports = { Turno };
