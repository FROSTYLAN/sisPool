const { Factura } = require('../models/factura.model');

const getAllFacturas = async (req, res) => {
  try {
    const Facturas = await Factura.findAll();

    res.status(200).json({ Facturas });
  } catch (error) {
    console.log(error);
  }
};

const createFacturas = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newFactura = await Factura.create({ name, email, password });

    res.status(201).json({ newFactura });
  } catch (error) {
    console.log(error);
  }
};

const getFacturaById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { Factura } = req;
    // SELECT * FROM Facturas WHERE id=?
    // const Factura = await Factura.findOne({ where: { id } });

    res.status(200).json({ Factura });
  } catch (error) {
    console.log(error);
  }
};

const updateFactura = async (req, res) => {
  try {
    const { Factura } = req;
    // const { id } = req.params;
    const { name } = req.body;

    // await Factura.update({ name }, { where: { id } });
    // const Factura = await Factura.findOne({ where: { id } });

    await Factura.update({ name });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

const deleteFactura = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { Factura } = req;
    // SELECT * FROM Facturas WHERE id=?
    // const Factura = await Factura.findOne({ where: { id } });

    // DELETE FROM ...
    // await Factura.destroy();
    await Factura.update({ status: 'deleted' });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllFacturas,
  createFacturas,
  getFacturaById,
  updateFactura,
  deleteFactura,
};
