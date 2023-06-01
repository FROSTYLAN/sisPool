const { Cliente } = require('../models/cliente.model');

const getAllClientes = async (req, res) => {
  try {
    const Clientes = await Cliente.findAll();

    res.status(200).json({ Clientes });
  } catch (error) {
    console.log(error);
  }
};

const createClientes = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newCliente = await Cliente.create({ name, email, password });

    res.status(201).json({ newCliente });
  } catch (error) {
    console.log(error);
  }
};

const getClienteById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { Cliente } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json({ Cliente });
  } catch (error) {
    console.log(error);
  }
};

const updateCliente = async (req, res) => {
  try {
    const { Cliente } = req;
    // const { id } = req.params;
    const { name } = req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await Cliente.update({ name });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

const deleteCliente = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { Cliente } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await Cliente.update({ status: 'deleted' });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllClientes,
  createClientes,
  getClienteById,
  updateCliente,
  deleteCliente,
};
