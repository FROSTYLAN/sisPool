const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Servicio = db.define('Servicio', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  costoAdicional: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  duracion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  disponibilidad: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  informacionReserva: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  instructores: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  personalAsignado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = { Servicio };
