const { Reserva } = require('../models/reserva.model');

const getAllReservas = async (req, res) => {
  try {
    const Reservas = await Reserva.findAll();

    res.status(200).json({ Reservas });
  } catch (error) {
    console.log(error);
  }
};

const createReservas = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newReserva = await Reserva.create({ name, email, password });

    res.status(201).json({ newReserva });
  } catch (error) {
    console.log(error);
  }
};

const getReservaById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { Reserva } = req;
    // SELECT * FROM Reservas WHERE id=?
    // const Reserva = await Reserva.findOne({ where: { id } });

    res.status(200).json({ Reserva });
  } catch (error) {
    console.log(error);
  }
};

const updateReserva = async (req, res) => {
  try {
    const { Reserva } = req;
    // const { id } = req.params;
    const { name } = req.body;

    // await Reserva.update({ name }, { where: { id } });
    // const Reserva = await Reserva.findOne({ where: { id } });

    await Reserva.update({ name });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

const deleteReserva = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { Reserva } = req;
    // SELECT * FROM Reservas WHERE id=?
    // const Reserva = await Reserva.findOne({ where: { id } });

    // DELETE FROM ...
    // await Reserva.destroy();
    await Reserva.update({ status: 'deleted' });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllReservas,
  createReservas,
  getReservaById,
  updateReserva,
  deleteReserva,
};
