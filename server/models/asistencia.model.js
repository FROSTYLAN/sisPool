const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Asistencia = db.define('Asistencia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fechaEntrada: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaSalida: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  duracion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  evaluacionSatisfaccion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  comentarios: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = { Asistencia };
