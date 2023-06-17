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
        model: 'Turno', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
    IDNIVEL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Nivel', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
    IDPISCINA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Piscina', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
    IDPERSONAL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Personal', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { ProgramacionClase };
