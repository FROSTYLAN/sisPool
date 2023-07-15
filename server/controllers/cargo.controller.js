const { Cargo } = require('../models/Cargo.model');

const getAllCargos = async (req, res) => {
  try {
    const cargos = await Cargo.findAll({
      where: {
        STATUS: 'actived',
      },
    });

    res.status(200).json(cargos);
  } catch (error) {
    console.log(error);
  }
};

const createCargo = async (req, res) => {
  try {
    const { DESCRIPCION } = req.body;

    const newCargo = await Cargo.create({
      DESCRIPCION,
    });

    res.status(201).json({ newCargo });
  } catch (error) {
    console.log(error);
  }
};

const getCargoById = async (req, res) => {
  try {
    const { cargo } = req;

    res.status(200).json(cargo);
  } catch (error) {
    console.log(error);
  }
};

const updateCargo = async (req, res) => {
  try {
    const { cargo } = req;
    // const { id } = req.params;
    const { DESCRIPCION } = req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await cargo.update({
      DESCRIPCION,
    });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteCargo = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { cargo } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await cargo.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCargos,
  createCargo,
  getCargoById,
  updateCargo,
  deleteCargo,
};
