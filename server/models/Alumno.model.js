const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

// Definir el modelo Alumno
const Alumno = db.define(
  'Alumno',
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
    EDAD: {
      type: DataTypes.INTEGER,
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
    SEXO: {
      type: DataTypes.ENUM('femenino', 'masculino'),
      allowNull: false,
    },
    TIPO: {
      type: DataTypes.ENUM('externo', 'interno'),
      allowNull: false,
    },
    STATUS: {
      type: DataTypes.ENUM('actived', 'deleted'),
      defaultValue: 'actived',
      allowNull: false,
    },
  },
  {
    timestamps: false, // Deshabilitar los timestamps de createdAt y updatedAt
  }
);

module.exports = { Alumno };
