const { Alumno } = require('../models/Alumno.model');

const getAllAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.findAll();

    res.status(200).json({ alumnos });
  } catch (error) {
    console.log(error);
  }
};

const createAlumno = async (req, res) => {
  try {
    const { DNI, APELLIDOS, NOMBRES, EDAD, DIRECCION, TELEFONO, SEXO, TIPO } =
      req.body;

    const newAlumno = await Alumno.create({
      DNI,
      APELLIDOS,
      NOMBRES,
      EDAD,
      DIRECCION,
      TELEFONO,
      SEXO,
      TIPO,
    });

    res.status(201).json({ newAlumno });
  } catch (error) {
    console.log(error);
  }
};

const getAlumnoById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { alumno } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json({ alumno });
  } catch (error) {
    console.log(error);
  }
};

const updateAlumno = async (req, res) => {
  try {
    const { alumno } = req;
    // const { id } = req.params;
    const { DNI, APELLIDOS, NOMBRES, EDAD, DIRECCION, TELEFONO, SEXO, TIPO } =
      req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await alumno.update({
      DNI,
      APELLIDOS,
      NOMBRES,
      EDAD,
      DIRECCION,
      TELEFONO,
      SEXO,
      TIPO,
    });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

const deleteAlumno = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { Alumno } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await Alumno.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllAlumnos,
  createAlumno,
  getAlumnoById,
  updateAlumno,
  deleteAlumno,
};
