const { Piscina } = require('../models/Piscina.model');

const getAllPiscinas = async (req, res) => {
  try {
    const piscinas = await Piscina.findAll({
      where: {
        STATUS: 'actived',
      },
    });

    res.status(200).json(piscinas);
  } catch (error) {
    console.log(error);
  }
};

const createPiscina = async (req, res) => {
  try {
    const { DESCRIPCION } = req.body;

    const newPiscina = await Piscina.create({
      DESCRIPCION,
    });

    res.status(201).json({ newPiscina });
  } catch (error) {
    console.log(error);
  }
};

const getPiscinaById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { piscina } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json(piscina);
  } catch (error) {
    console.log(error);
  }
};

const updatePiscina = async (req, res) => {
  try {
    const { piscina } = req;
    // const { id } = req.params;
    const { DESCRIPCION } = req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await piscina.update({
      DESCRIPCION,
    });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deletePiscina = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { piscina } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await piscina.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPiscinas,
  createPiscina,
  getPiscinaById,
  updatePiscina,
  deletePiscina,
};
