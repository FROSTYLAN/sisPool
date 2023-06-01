const express = require('express');
var cors = require('cors');

// Routers
const { clientesRouter } = require('./routes/cliente.routes');
const { empleadosRouter } = require('./routes/empleado.routes');
const { piscinasRouter } = require('./routes/piscina.routes');
const { reservasRouter } = require('./routes/reserva.routes');
const { facturasRouter } = require('./routes/factura.routes');

// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

//Endpoint
app.use('/api/v1/clients', clientesRouter);
app.use('/api/v1/employees', empleadosRouter);
app.use('/api/v1/pools', piscinasRouter);
app.use('/api/v1/reservations', reservasRouter);
app.use('/api/v1/bills', facturasRouter);

module.exports = { app };
