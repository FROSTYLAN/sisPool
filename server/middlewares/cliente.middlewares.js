// Models
const { Cliente } = require('../models/cliente.model');

const clienteExists = async (req, res, next) => {
  try {
    const { id } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const cliente = await Cliente.findOne({ where: { id } });

    if (!cliente) {
      return res.status(404).json({
        status: 'error',
        message: 'client not found given that id',
      });
    }

    // Add cliente data to the req object
    req.cliente = cliente;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { clienteExists };
