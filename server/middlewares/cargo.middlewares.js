// Models
const { Cargo } = require('../models/Cargo.model');

const cargoExists = async (req, res, next) => {
  try {
    const { ID } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const cargo = await Cargo.findOne({ where: { ID } });

    if (!cargo) {
      return res.status(404).json({
        status: 'error',
        message: 'cargo not found given that id',
      });
    }

    // Add cliente data to the req object
    req.cargo = cargo;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { cargoExists };
