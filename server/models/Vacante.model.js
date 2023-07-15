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
        model: 'ProgramacionClases', // Nombre de la tabla referenciada
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

module.exports = { Vacante };
