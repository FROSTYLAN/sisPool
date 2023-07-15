const express = require('express');

//Middlewares
const { nivelExists } = require('../middlewares/nivel.middlewares');

// Controller
const {
  getAllNiveles,
  createNivel,
  getNivelById,
  updateNivel,
  deleteNivel,
} = require('../controllers/nivel.controller');

const router = express.Router();

router.route('/').get(getAllNiveles).post(createNivel);

router
  .route('/:ID')
  .get(nivelExists, getNivelById)
  .patch(nivelExists, updateNivel)
  .delete(nivelExists, deleteNivel);

module.exports = { nivelesRouter: router };
