const express = require('express');

//Middlewares
const { matriculaExists } = require('../middlewares/matricula.middlewares');

// Controller
const {
  getAllMatriculas,
  getAllNames,
  createMatricula,
  getMatriculaById,
  updateMatricula,
  deleteMatricula,
} = require('../controllers/matricula.controller');

const router = express.Router();

router.route('/').get(getAllMatriculas).post(createMatricula);

router
  .route('/:ID')
  .get(matriculaExists, getMatriculaById)
  .patch(matriculaExists, updateMatricula)
  .delete(matriculaExists, deleteMatricula);

module.exports = { matriculasRouter: router };
