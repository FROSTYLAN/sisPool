const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const ProgramacionClase = db.define(
  'ProgramacionClase',
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    IDTURNO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Turnos', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
    IDNIVEL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Nivels', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
    IDPISCINA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Piscinas', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
    IDPERSONAL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Personals', // Nombre de la tabla referenciada
        key: 'DNI', // Columna referenciada
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

module.exports = { ProgramacionClase };
