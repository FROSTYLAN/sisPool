const express = require('express');

//Middlewares
const {
  programacionExists,
} = require('../middlewares/programacion.middlewares');

// Controller
const {
  getAllProgramaciones,
  getAllNames,
  createProgramacion,
  getProgramacionById,
  updateProgramacion,
  deleteProgramacion,
} = require('../controllers/programacion.controller');

const router = express.Router();

router.route('/').get(getAllProgramaciones).post(createProgramacion);

router.route('/names').get(getAllNames);

router
  .route('/:ID')
  .get(programacionExists, getProgramacionById)
  .patch(programacionExists, updateProgramacion)
  .delete(programacionExists, deleteProgramacion);

module.exports = { programacionesRouter: router };
