const express = require('express');

//Middlewares
const { personalExists } = require('../middlewares/personal.middlewares');

// Controller
const {
  getAllPersonales,
  getAllNames,
  createPersonal,
  getPersonalById,
  updatePersonal,
  deletePersonal,
} = require('../controllers/personal.controller');

const router = express.Router();

router.route('/').get(getAllPersonales).post(createPersonal);

router.route('/names').get(getAllNames);

router
  .route('/:DNI')
  .get(personalExists, getPersonalById)
  .patch(personalExists, updatePersonal)
  .delete(personalExists, deletePersonal);

module.exports = { personalesRouter: router };
