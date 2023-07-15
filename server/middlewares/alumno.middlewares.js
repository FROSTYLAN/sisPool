// Models
const { Alumno } = require('../models/Alumno.model');

const alumnoExists = async (req, res, next) => {
  try {
    const { DNI } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const alumno = await Alumno.findOne({ where: { DNI } });

    if (!alumno) {
      return res.status(404).json({
        status: 'error',
        message: 'alumno not found given that id',
      });
    }

    // Add cliente data to the req object
    req.alumno = alumno;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { alumnoExists };
