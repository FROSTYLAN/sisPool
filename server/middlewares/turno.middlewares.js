// Models
const { Turno } = require('../models/Turno.model');

const turnoExists = async (req, res, next) => {
  try {
    const { ID } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const turno = await Turno.findOne({ where: { ID } });

    if (!turno) {
      return res.status(404).json({
        status: 'error',
        message: 'turno not found given that id',
      });
    }

    // Add cliente data to the req object
    req.turno = turno;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { turnoExists };
