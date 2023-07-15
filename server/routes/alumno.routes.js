const express = require('express');

//Middlewares
const { alumnoExists } = require('../middlewares/alumno.middlewares');

// Controller
const {
  getAllAlumnos,
  getAllNames,
  createAlumno,
  getAlumnoById,
  updateAlumno,
  deleteAlumno,
} = require('../controllers/alumno.controller');

const router = express.Router();

router.route('/').get(getAllAlumnos).post(createAlumno);

router.route('/names').get(getAllNames);

router
  .route('/:DNI')
  .get(alumnoExists, getAlumnoById)
  .patch(alumnoExists, updateAlumno)
  .delete(alumnoExists, deleteAlumno);

module.exports = { alumnosRouter: router };
