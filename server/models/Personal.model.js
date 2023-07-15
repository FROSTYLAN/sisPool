const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Personal = db.define(
  'Personal',
  {
    DNI: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    APELLIDOS: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NOMBRES: {
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
        model: 'Cargos', // Nombre de la tabla referenciada
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

module.exports = { Personal };
