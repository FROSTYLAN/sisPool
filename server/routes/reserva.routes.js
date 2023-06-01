const express = require('express');

//Middlewares
const { reservaExists } = require('../middlewares/reserva.middlewares');

// Controller
const {
  getAllReservas,
  createReservas,
  getReservaById,
  updateReserva,
  deleteReserva,
} = require('../controllers/reserva.controller');

const router = express.Router();

// router.get("/", getAllReservas);

// router.post("/", createReservas);

router.route('/').get(getAllReservas).post(createReservas);

// router.get("/:id", ReservaExists, getReservaById);

// router.patch("/:id", updateReserva);

// router.delete("/:id", deleteReserva);

router
  .route('/:id')
  .get(reservaExists, getReservaById)
  .patch(reservaExists, updateReserva)
  .delete(reservaExists, deleteReserva);

module.exports = { reservasRouter: router };
