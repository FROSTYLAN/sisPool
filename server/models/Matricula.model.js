const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Matricula = db.define(
  'Matricula',
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    IDALUMNO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Alumnos', // Nombre de la tabla referenciada
        key: 'DNI', // Columna referenciada
      },
    },
    IDVACANTE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Vacantes', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
    IDMONTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tarifas', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
    IDDESCUENTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Descuentos', // Nombre de la tabla referenciada
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

module.exports = { Matricula };
