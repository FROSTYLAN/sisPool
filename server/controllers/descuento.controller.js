const { Descuento } = require('../models/Descuento.model');

const getAllDescuentos = async (req, res) => {
  try {
    const descuentos = await Descuento.findAll({
      where: {
        STATUS: 'actived',
      },
    });

    res.status(200).json(descuentos);
  } catch (error) {
    console.log(error);
  }
};

const createDescuento = async (req, res) => {
  try {
    const { DESCRIPCION, MONTO_DSCTO } = req.body;

    const newDescuento = await Descuento.create({
      DESCRIPCION,
      MONTO_DSCTO,
    });

    res.status(201).json({ newDescuento });
  } catch (error) {
    console.log(error);
  }
};

const getDescuentoById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { descuento } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json(descuento);
  } catch (error) {
    console.log(error);
  }
};

const updateDescuento = async (req, res) => {
  try {
    const { descuento } = req;
    // const { id } = req.params;
    const { DESCRIPCION, MONTO_DSCTO } = req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await descuento.update({
      DESCRIPCION,
      MONTO_DSCTO,
    });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteDescuento = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { descuento } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await descuento.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllDescuentos,
  createDescuento,
  getDescuentoById,
  updateDescuento,
  deleteDescuento,
};
