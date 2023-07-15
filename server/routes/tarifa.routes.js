const express = require('express');

//Middlewares
const { tarifaExists } = require('../middlewares/tarifa.middlewares');

// Controller
const {
  getAllTarifas,
  createTarifa,
  getTarifaById,
  updateTarifa,
  deleteTarifa,
} = require('../controllers/tarifa.controller');

const router = express.Router();

router.route('/').get(getAllTarifas).post(createTarifa);

router
  .route('/:ID')
  .get(tarifaExists, getTarifaById)
  .patch(tarifaExists, updateTarifa)
  .delete(tarifaExists, deleteTarifa);

module.exports = { tarifasRouter: router };
