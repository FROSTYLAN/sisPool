// Models
const { Factura } = require('../models/factura.model');

const facturaExists = async (req, res, next) => {
  try {
    const { id } = req.params; // { id }

    // SELECT * FROM facturas WHERE id=?
    const factura = await Factura.findOne({ where: { id } });

    if (!factura) {
      return res.status(404).json({
        status: 'error',
        message: 'factura not found given that id',
      });
    }

    // Add factura data to the req object
    req.factura = factura;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { facturaExists };
