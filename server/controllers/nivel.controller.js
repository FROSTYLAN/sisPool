const { Nivel } = require('../models/Nivel.model');

const getAllNiveles = async (req, res) => {
  try {
    const niveles = await Nivel.findAll({
      where: {
        STATUS: 'actived',
      },
    });

    res.status(200).json(niveles);
  } catch (error) {
    console.log(error);
  }
};

const createNivel = async (req, res) => {
  try {
    const { DESCRIPCION, ABREVIATURA } = req.body;

    const newNivel = await Nivel.create({
      DESCRIPCION,
      ABREVIATURA,
    });

    res.status(201).json({ newNivel });
  } catch (error) {
    console.log(error);
  }
};

const getNivelById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { nivel } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json(nivel);
  } catch (error) {
    console.log(error);
  }
};

const updateNivel = async (req, res) => {
  try {
    const { nivel } = req;
    // const { id } = req.params;
    const { DESCRIPCION, ABREVIATURA } = req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await Nivel.update({
      DESCRIPCION,
      ABREVIATURA,
    });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteNivel = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { nivel } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await nivel.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllNiveles,
  createNivel,
  getNivelById,
  updateNivel,
  deleteNivel,
};
