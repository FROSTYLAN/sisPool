const express = require('express');

//Middlewares
const { clienteExists } = require('../middlewares/cliente.middlewares');

// Controller
const {
  getAllClientes,
  createClientes,
  getClienteById,
  updateCliente,
  deleteCliente,
} = require('../controllers/cliente.controller');

const router = express.Router();

// router.get("/", getAllClientes);

// router.post("/", createClientes);

router.route('/').get(getAllClientes).post(createClientes);

// router.get("/:id", clienteExists, getClienteById);

// router.patch("/:id", updateCliente);

// router.delete("/:id", deleteCliente);

router
  .route('/:id')
  .get(clienteExists, getClienteById)
  .patch(clienteExists, updateCliente)
  .delete(clienteExists, deleteCliente);

module.exports = { clientesRouter: router };
