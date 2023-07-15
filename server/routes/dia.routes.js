const express = require('express');

//Middlewares
const { diaExists } = require('../middlewares/dia.middlewares');

// Controller
const {
  getAllDias,
  createDia,
  getDiaById,
  updateDia,
  deleteDia,
} = require('../controllers/dia.controller');

const router = express.Router();

router.route('/').get(getAllDias).post(createDia);

router
  .route('/:ID')
  .get(diaExists, getDiaById)
  .patch(diaExists, updateDia)
  .delete(diaExists, deleteDia);

module.exports = { diasRouter: router };
