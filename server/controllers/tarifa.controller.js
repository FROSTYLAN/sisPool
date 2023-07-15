const { Tarifa } = require('../models/Tarifa.model');

const getAllTarifas = async (req, res) => {
  try {
    const tarifas = await Tarifa.findAll({
      where: {
        STATUS: 'actived',
      },
    });

    res.status(200).json(tarifas);
  } catch (error) {
    console.log(error);
  }
};

const createTarifa = async (req, res) => {
  try {
    const { DESCRIPCION, MONTO, FECHAINICIO, FECHAFINAL } = req.body;

    const newTarifa = await Tarifa.create({
      DESCRIPCION,
      MONTO,
      FECHAINICIO,
      FECHAFINAL,
    });

    res.status(201).json({ newTarifa });
  } catch (error) {
    console.log(error);
  }
};

const getTarifaById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { tarifa } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json(tarifa);
  } catch (error) {
    console.log(error);
  }
};

const updateTarifa = async (req, res) => {
  try {
    const { tarifa } = req;
    // const { id } = req.params;
    const { TIPO, DESCRIPCION, MONTO, MONTO_CLASE, FECHAINICIO, FECHAFINAL } =
      req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await Tarifa.update({
      TIPO,
      DESCRIPCION,
      MONTO,
      MONTO_CLASE,
      FECHAINICIO,
      FECHAFINAL,
    });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteTarifa = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { tarifa } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await tarifa.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTarifas,
  createTarifa,
  getTarifaById,
  updateTarifa,
  deleteTarifa,
};
