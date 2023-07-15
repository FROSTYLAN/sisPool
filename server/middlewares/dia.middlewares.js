// Models
const { Dia } = require('../models/Dia.model');

const diaExists = async (req, res, next) => {
  try {
    const { ID } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const dia = await Dia.findOne({ where: { ID } });

    if (!dia) {
      return res.status(404).json({
        status: 'error',
        message: 'dia not found given that id',
      });
    }

    // Add cliente data to the req object
    req.dia = dia;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { diaExists };
