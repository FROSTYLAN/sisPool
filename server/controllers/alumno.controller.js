const { where } = require('sequelize');
const { Alumno } = require('../models/Alumno.model');

const getAllAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.findAll({
      where: {
        STATUS: 'actived',
      },
    });

    res.status(200).json(alumnos);
  } catch (error) {
    console.log(error);
  }
};

const getAllNames = async (req, res) => {
  try {
    const alumnos = await Alumno.findAll({
      where: {
        STATUS: 'actived',
      },
      attributes: ['DNI', 'APELLIDOS', 'NOMBRES'],
      raw: true,
    });

    const names = alumnos.map(alumno => ({
      DNI: alumno.DNI,
      ALUMNO: alumno.NOMBRES + ' ' + alumno.APELLIDOS,
    }));

    res.status(200).json(names);
  } catch (error) {
    console.log(error);
  }
};

const createAlumno = async (req, res) => {
  try {
    const { DNI, APELLIDOS, NOMBRES, EDAD, DIRECCION, TELEFONO, SEXO, TIPO } =
      req.body;

    const alumno = await Alumno.findOne({ where: { DNI, STATUS: 'actived' } });

    if (!alumno) {
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
    } else {
      return res.status(400).json({
        status: 'error',
        message: 'Alumno con ese DNI ya esta matriculado',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getAlumnoById = async (req, res) => {
  try {
    const { alumno } = req;

    res.status(200).json(alumno);
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
    const { alumno } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await alumno.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllAlumnos,
  getAllNames,
  createAlumno,
  getAlumnoById,
  updateAlumno,
  deleteAlumno,
};
