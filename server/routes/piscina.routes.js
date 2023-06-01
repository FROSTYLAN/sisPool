const express = require('express');

//Middlewares
const { piscinaExists } = require('../middlewares/piscina.middlewares');

// Controller
const {
  getAllPiscinas,
  createPiscinas,
  getPiscinaById,
  updatePiscina,
  deletePiscina,
} = require('../controllers/piscina.controller');

const router = express.Router();

// router.get("/", getAllPiscinas);

// router.post("/", createPiscinas);

router.route('/').get(getAllPiscinas).post(createPiscinas);

// router.get("/:id", PiscinaExists, getPiscinaById);

// router.patch("/:id", updatePiscina);

// router.delete("/:id", deletePiscina);

router
  .route('/:id')
  .get(piscinaExists, getPiscinaById)
  .patch(piscinaExists, updatePiscina)
  .delete(piscinaExists, deletePiscina);

module.exports = { piscinasRouter: router };
