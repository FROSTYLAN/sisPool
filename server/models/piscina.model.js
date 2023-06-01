const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Piscina = db.define('Piscina', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitud: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitud: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  capacidadMaxima: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipoPiscina: {
    type: DataTypes.ENUM('interior', 'exterior'),
    allowNull: false,
  },
  dimensiones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  profundidad: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  temperatura: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  estadoMantenimiento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  informacionSeguridad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imagenes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = { Piscina };
