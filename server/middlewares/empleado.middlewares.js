// Models
const { Empleado } = require('../models/empleado.model');

const empleadoExists = async (req, res, next) => {
  try {
    const { id } = req.params; // { id }

    // SELECT * FROM empleados WHERE id=?
    const empleado = await Empleado.findOne({ where: { id } });

    if (!empleado) {
      return res.status(404).json({
        status: 'error',
        message: 'employee not found given that id',
      });
    }

    // Add empleado data to the req object
    req.empleado = empleado;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { empleadoExists };
