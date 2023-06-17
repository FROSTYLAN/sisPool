const express = require('express');
var cors = require('cors');

// Routers
const { alumnosRouter } = require('./routes/alumno.routes');

// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

//Endpoint
app.use('/api/v1/clients', alumnosRouter);

module.exports = { app };
