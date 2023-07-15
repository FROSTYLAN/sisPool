const express = require('express');
var cors = require('cors');

// Routers
const { alumnosRouter } = require('./routes/alumno.routes');
const { cargosRouter } = require('./routes/cargo.routes');
const { descuentosRouter } = require('./routes/descuento.routes');
const { diasRouter } = require('./routes/dia.routes');
const { nivelesRouter } = require('./routes/nivel.routes');
const { personalesRouter } = require('./routes/personal.routes');
const { piscinasRouter } = require('./routes/piscina.routes');
const { programacionesRouter } = require('./routes/programacion.routes');
const { tarifasRouter } = require('./routes/tarifa.routes');
const { turnosRouter } = require('./routes/turno.routes');
const { vacantesRouter } = require('./routes/vacante.routes');
const { matriculasRouter } = require('./routes/matricula.routes');

// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

//Endpoint
app.use('/api/v1/alumno', alumnosRouter);
app.use('/api/v1/cargo', cargosRouter);
app.use('/api/v1/descuento', descuentosRouter);
app.use('/api/v1/dia', diasRouter);
app.use('/api/v1/nivel', nivelesRouter);
app.use('/api/v1/personal', personalesRouter);
app.use('/api/v1/piscina', piscinasRouter);
app.use('/api/v1/programacion', programacionesRouter);
app.use('/api/v1/tarifa', tarifasRouter);
app.use('/api/v1/turno', turnosRouter);
app.use('/api/v1/vacante', vacantesRouter);
app.use('/api/v1/matricula', matriculasRouter);

module.exports = { app };
