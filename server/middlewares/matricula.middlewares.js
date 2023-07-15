// Models
const { Matricula } = require('../models/Matricula.model');

const matriculaExists = async (req, res, next) => {
  try {
    const { ID } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const matricula = await Matricula.findOne({ where: { ID } });

    if (!matricula) {
      return res.status(404).json({
        status: 'error',
        message: 'matricula not found given that id',
      });
    }

    // Add cliente data to the req object
    req.matricula = matricula;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { matriculaExists };
