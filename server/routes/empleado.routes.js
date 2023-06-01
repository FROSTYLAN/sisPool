const express = require('express');

//Middlewares
const { empleadoExists } = require('../middlewares/empleado.middlewares');

// Controller
const {
  getAllEmpleados,
  createEmpleados,
  getEmpleadoById,
  updateEmpleado,
  deleteEmpleado,
} = require('../controllers/empleado.controller');

const router = express.Router();

// router.get("/", getAllEmpleados);

// router.post("/", createEmpleados);

router.route('/').get(getAllEmpleados).post(createEmpleados);

// router.get("/:id", EmpleadoExists, getEmpleadoById);

// router.patch("/:id", updateEmpleado);

// router.delete("/:id", deleteEmpleado);

router
  .route('/:id')
  .get(empleadoExists, getEmpleadoById)
  .patch(empleadoExists, updateEmpleado)
  .delete(empleadoExists, deleteEmpleado);

module.exports = { empleadosRouter: router };
