const express = require('express');

//Middlewares
const { piscinaExists } = require('../middlewares/piscina.middlewares');

// Controller
const {
  getAllPiscinas,
  createPiscina,
  getPiscinaById,
  updatePiscina,
  deletePiscina,
} = require('../controllers/piscina.controller');

const router = express.Router();

router.route('/').get(getAllPiscinas).post(createPiscina);

router
  .route('/:ID')
  .get(piscinaExists, getPiscinaById)
  .patch(piscinaExists, updatePiscina)
  .delete(piscinaExists, deletePiscina);

module.exports = { piscinasRouter: router };
