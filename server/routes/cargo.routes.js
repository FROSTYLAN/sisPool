const express = require('express');

//Middlewares
const { cargoExists } = require('../middlewares/cargo.middlewares');

// Controller
const {
  getAllCargos,
  createCargo,
  getCargoById,
  updateCargo,
  deleteCargo,
} = require('../controllers/cargo.controller');

const router = express.Router();

router.route('/').get(getAllCargos).post(createCargo);

router
  .route('/:ID')
  .get(cargoExists, getCargoById)
  .patch(cargoExists, updateCargo)
  .delete(cargoExists, deleteCargo);

module.exports = { cargosRouter: router };
