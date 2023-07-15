const express = require('express');

//Middlewares
const { vacanteExists } = require('../middlewares/vacante.middlewares');

// Controller
const {
  getAllVacantes,
  getAllNames,
  createVacante,
  getVacanteById,
  updateVacante,
  deleteVacante,
} = require('../controllers/vacante.controller');

const router = express.Router();

router.route('/').get(getAllVacantes).post(createVacante);

router.route('/names').get(getAllNames);

router
  .route('/:ID')
  .get(vacanteExists, getVacanteById)
  .patch(vacanteExists, updateVacante)
  .delete(vacanteExists, deleteVacante);

module.exports = { vacantesRouter: router };
