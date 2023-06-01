const express = require('express');

//Middlewares
const { facturaExists } = require('../middlewares/factura.middlewares');

// Controller
const {
  getAllFacturas,
  createFacturas,
  getFacturaById,
  updateFactura,
  deleteFactura,
} = require('../controllers/factura.controller');

const router = express.Router();

// router.get("/", getAllFacturas);

// router.post("/", createFacturas);

router.route('/').get(getAllFacturas).post(createFacturas);

// router.get("/:id", FacturaExists, getFacturaById);

// router.patch("/:id", updateFactura);

// router.delete("/:id", deleteFactura);

router
  .route('/:id')
  .get(facturaExists, getFacturaById)
  .patch(facturaExists, updateFactura)
  .delete(facturaExists, deleteFactura);

module.exports = { facturasRouter: router };
