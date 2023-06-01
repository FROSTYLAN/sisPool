const { app } = require('./app');

//Models
const { Cliente } = require('./models/cliente.model');
const { Empleado } = require('./models/empleado.model');
const { Piscina } = require('./models/piscina.model');
const { Reserva } = require('./models/reserva.model');
const { Factura } = require('./models/factura.model');
const { Servicio } = require('./models/servicio.model');
const { Asistencia } = require('./models/asistencia.model');

// Utils
const { db } = require('./utils/database');

db.authenticate()
  .then(() => {
    console.log('Database authenticated');
  })
  .catch(err => console.log(err));

// Establish models relations

// 1 Cliente <----> M Reserva
Cliente.hasMany(Reserva, { foreignKey: 'clienteId' });
Reserva.belongsTo(Cliente, { foreignKey: 'clienteId' });

// 1 Reserva <----> M Servicio
Reserva.hasMany(Servicio, { foreignKey: 'reservaId' });
Servicio.belongsTo(Reserva, { foreignKey: 'reservaId' });

// 1 Reserva <----> 1 Factura
Factura.belongsTo(Reserva, { foreignKey: 'reservaId' });
Reserva.hasOne(Factura, { foreignKey: 'reservaId' });

// 1 Cliente <----> M Asistencia
Cliente.hasMany(Asistencia, { foreignKey: 'clienteId' });
Asistencia.belongsTo(Cliente, { foreignKey: 'clienteId' });

// 1 Piscina <----> M Asistencia
Piscina.hasMany(Asistencia, { foreignKey: 'piscinaId' });
Asistencia.belongsTo(Piscina, { foreignKey: 'piscinaId' });

// 1 Empleado <----> M Piscina
Empleado.hasMany(Piscina, { foreignKey: 'empleadoId' });
Piscina.belongsTo(Empleado, { foreignKey: 'empleadoId' });

// 1 Cliente <----> M Factura
Cliente.hasMany(Factura, { foreignKey: 'clienteId' });
Factura.belongsTo(Cliente, { foreignKey: 'clienteId' });

// 1 Empleado <----> M Servicio
Empleado.hasMany(Servicio, { foreignKey: 'empleadoId' });
Servicio.belongsTo(Empleado, { foreignKey: 'empleadoId' });

// Sync model from the database
db.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.log(err));

// Spin up server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
