const { Empleado } = require('../models/empleado.model');

const getAllEmpleados = async (req, res) => {
  try {
    const Empleados = await Empleado.findAll();

    res.status(200).json({ Empleados });
  } catch (error) {
    console.log(error);
  }
};

const createEmpleados = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newEmpleado = await Empleado.create({ name, email, password });

    res.status(201).json({ newEmpleado });
  } catch (error) {
    console.log(error);
  }
};

const getEmpleadoById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { Empleado } = req;
    // SELECT * FROM Empleados WHERE id=?
    // const Empleado = await Empleado.findOne({ where: { id } });

    res.status(200).json({ Empleado });
  } catch (error) {
    console.log(error);
  }
};

const updateEmpleado = async (req, res) => {
  try {
    const { Empleado } = req;
    // const { id } = req.params;
    const { name } = req.body;

    // await Empleado.update({ name }, { where: { id } });
    // const Empleado = await Empleado.findOne({ where: { id } });

    await Empleado.update({ name });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

const deleteEmpleado = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { Empleado } = req;
    // SELECT * FROM Empleados WHERE id=?
    // const Empleado = await Empleado.findOne({ where: { id } });

    // DELETE FROM ...
    // await Empleado.destroy();
    await Empleado.update({ status: 'deleted' });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllEmpleados,
  createEmpleados,
  getEmpleadoById,
  updateEmpleado,
  deleteEmpleado,
};
