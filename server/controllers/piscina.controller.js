const { Piscina } = require('../models/piscina.model');

const getAllPiscinas = async (req, res) => {
  try {
    const Piscinas = await Piscina.findAll();

    res.status(200).json({ Piscinas });
  } catch (error) {
    console.log(error);
  }
};

const createPiscinas = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newPiscina = await Piscina.create({ name, email, password });

    res.status(201).json({ newPiscina });
  } catch (error) {
    console.log(error);
  }
};

const getPiscinaById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { Piscina } = req;
    // SELECT * FROM Piscinas WHERE id=?
    // const Piscina = await Piscina.findOne({ where: { id } });

    res.status(200).json({ Piscina });
  } catch (error) {
    console.log(error);
  }
};

const updatePiscina = async (req, res) => {
  try {
    const { Piscina } = req;
    // const { id } = req.params;
    const { name } = req.body;

    // await Piscina.update({ name }, { where: { id } });
    // const Piscina = await Piscina.findOne({ where: { id } });

    await Piscina.update({ name });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

const deletePiscina = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { Piscina } = req;
    // SELECT * FROM Piscinas WHERE id=?
    // const Piscina = await Piscina.findOne({ where: { id } });

    // DELETE FROM ...
    // await Piscina.destroy();
    await Piscina.update({ status: 'deleted' });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPiscinas,
  createPiscinas,
  getPiscinaById,
  updatePiscina,
  deletePiscina,
};
