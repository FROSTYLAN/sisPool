const { Dia } = require('../models/Dia.model');
const { Turno } = require('../models/Turno.model');

const getAllTurnos = async (req, res) => {
  try {
    const turnos = await Turno.findAll({
      where: {
        STATUS: 'actived',
      },
      include: {
        model: Dia,
        as: 'DIAS',
        attributes: ['DESCRIPCION'],
      },
      attributes: ['ID', 'DESCRIPCION'],
      raw: true,
    });

    res.status(200).json(turnos);
  } catch (error) {
    console.log(error);
  }
};

const createTurno = async (req, res) => {
  try {
    const { DESCRIPCION, IDDIAS } = req.body;

    const newTurno = await Turno.create({
      DESCRIPCION,
      IDDIAS,
    });

    res.status(201).json({ newTurno });
  } catch (error) {
    console.log(error);
  }
};

const getTurnoById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { turno } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json(turno);
  } catch (error) {
    console.log(error);
  }
};

const updateTurno = async (req, res) => {
  try {
    const { turno } = req;
    // const { id } = req.params;
    const { DESCRIPCION, IDDIAS } = req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await turno.update({
      DESCRIPCION,
      IDDIAS,
    });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteTurno = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { turno } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await turno.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTurnos,
  createTurno,
  getTurnoById,
  updateTurno,
  deleteTurno,
};
