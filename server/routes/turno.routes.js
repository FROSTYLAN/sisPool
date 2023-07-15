const express = require('express');

//Middlewares
const { turnoExists } = require('../middlewares/turno.middlewares');

// Controller
const {
  getAllTurnos,
  createTurno,
  getTurnoById,
  updateTurno,
  deleteTurno,
} = require('../controllers/turno.controller');

const router = express.Router();

router.route('/').get(getAllTurnos).post(createTurno);

router
  .route('/:ID')
  .get(turnoExists, getTurnoById)
  .patch(turnoExists, updateTurno)
  .delete(turnoExists, deleteTurno);

module.exports = { turnosRouter: router };
