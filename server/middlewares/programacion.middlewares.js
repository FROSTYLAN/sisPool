// Models
const { ProgramacionClase } = require('../models/ProgramacionClase.model');

const programacionExists = async (req, res, next) => {
  try {
    const { ID } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const programacion = await ProgramacionClase.findOne({ where: { ID } });

    if (!programacion) {
      return res.status(404).json({
        status: 'error',
        message: 'programacion not found given that id',
      });
    }

    // Add cliente data to the req object
    req.programacion = programacion;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { programacionExists };
