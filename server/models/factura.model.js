const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Factura = db.define('Factura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fechaEmision: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  totalPagar: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  estadoPago: {
    type: DataTypes.ENUM('pagado', 'pendiente'),
    allowNull: false,
    defaultValue: 'pendiente',
  },
});

module.exports = { Factura };
