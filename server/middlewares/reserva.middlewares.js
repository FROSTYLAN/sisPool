// Models
const { Reserva } = require('../models/reserva.model');

const reservaExists = async (req, res, next) => {
  try {
    const { id } = req.params; // { id }

    // SELECT * FROM reservas WHERE id=?
    const reserva = await Reserva.findOne({ where: { id } });

    if (!reserva) {
      return res.status(404).json({
        status: 'error',
        message: 'reservation not found given that id',
      });
    }

    // Add reserva data to the req object
    req.reserva = reserva;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { reservaExists };
