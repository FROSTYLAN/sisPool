// Models
const { Tarifa } = require('../models/Tarifa.model');

const tarifaExists = async (req, res, next) => {
  try {
    const { ID } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const tarifa = await Tarifa.findOne({ where: { ID } });

    if (!tarifa) {
      return res.status(404).json({
        status: 'error',
        message: 'tarifa not found given that id',
      });
    }

    // Add cliente data to the req object
    req.tarifa = tarifa;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { tarifaExists };
