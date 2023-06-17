// Models
const { Descuento } = require('../models/Descuento.model');

const descuentoExists = async (req, res, next) => {
  try {
    const { ID } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const descuento = await Descuento.findOne({ where: { ID } });

    if (!descuento) {
      return res.status(404).json({
        status: 'error',
        message: 'descuento not found given that id',
      });
    }

    // Add cliente data to the req object
    req.descuento = descuento;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { descuentoExists };
