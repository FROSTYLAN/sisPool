const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Cliente = db.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correoElectronico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaNacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alergias: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  restriccionesDieteticas: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  informacionMedica: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = { Cliente };
