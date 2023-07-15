const express = require('express');

//Middlewares
const { descuentoExists } = require('../middlewares/descuento.middlewares');

// Controller
const {
  getAllDescuentos,
  createDescuento,
  getDescuentoById,
  updateDescuento,
  deleteDescuento,
} = require('../controllers/descuento.controller');

const router = express.Router();

router.route('/').get(getAllDescuentos).post(createDescuento);

router
  .route('/:ID')
  .get(descuentoExists, getDescuentoById)
  .patch(descuentoExists, updateDescuento)
  .delete(descuentoExists, deleteDescuento);

module.exports = { descuentosRouter: router };
