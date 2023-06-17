const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Vacante = db.define(
  'Vacante',
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    MES: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NROVACANTES: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    IDPROGRAMACIONCLASE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ProgramacionClase', // Nombre de la tabla referenciada
        key: 'ID', // Columna referenciada
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Vacante };
