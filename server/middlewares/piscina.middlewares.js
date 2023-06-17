// Models
const { Piscina } = require('../models/Piscina.model');

const piscinaExists = async (req, res, next) => {
  try {
    const { ID } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const piscina = await Piscina.findOne({ where: { ID } });

    if (!piscina) {
      return res.status(404).json({
        status: 'error',
        message: 'piscina not found given that id',
      });
    }

    // Add cliente data to the req object
    req.piscina = piscina;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { piscinaExists };
