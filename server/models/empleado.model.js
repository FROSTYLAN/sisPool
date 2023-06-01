const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Empleado = db.define('Empleado', {
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
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaContratacion: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  salario: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  certificaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  habilidades: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rolesEspecificos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = { Empleado };
