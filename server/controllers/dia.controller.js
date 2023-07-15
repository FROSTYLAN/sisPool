const { Dia } = require('../models/Dia.model');

const getAllDias = async (req, res) => {
  try {
    const dias = await Dia.findAll({
      where: {
        STATUS: 'actived',
      },
    });

    res.status(200).json(dias);
  } catch (error) {
    console.log(error);
  }
};

const createDia = async (req, res) => {
  try {
    const { DESCRIPCION } = req.body;

    const newDia = await Dia.create({
      DESCRIPCION,
    });

    res.status(201).json({ newDia });
  } catch (error) {
    console.log(error);
  }
};

const getDiaById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { dia } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json(dia);
  } catch (error) {
    console.log(error);
  }
};

const updateDia = async (req, res) => {
  try {
    const { dia } = req;
    // const { id } = req.params;
    const { DESCRIPCION } = req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await dia.update({
      DESCRIPCION,
    });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteDia = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { dia } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await dia.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllDias,
  createDia,
  getDiaById,
  updateDia,
  deleteDia,
};
