// Models
const { Vacante } = require('../models/Vacante.model');

const vacanteExists = async (req, res, next) => {
  try {
    const { ID } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const vacante = await Vacante.findOne({ where: { ID } });

    if (!vacante) {
      return res.status(404).json({
        status: 'error',
        message: 'vacante not found given that id',
      });
    }

    // Add cliente data to the req object
    req.vacante = vacante;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { vacanteExists };
