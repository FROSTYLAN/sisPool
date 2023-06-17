// Models
const { Nivel } = require('../models/Nivel.model');

const nivelExists = async (req, res, next) => {
  try {
    const { ID } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const nivel = await Nivel.findOne({ where: { ID } });

    if (!nivel) {
      return res.status(404).json({
        status: 'error',
        message: 'nivel not found given that id',
      });
    }

    // Add cliente data to the req object
    req.nivel = nivel;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { nivelExists };
