const { Personal } = require('../models/Personal.model');
const { Cargo } = require('../models/Cargo.model');
const getAllPersonales = async (req, res) => {
  try {
    const personales = await Personal.findAll({
      where: {
        STATUS: 'actived',
      },
      include: {
        model: Cargo,
        as: 'CARGO', // Especifica el alias utilizado en la asociación entre Personal y Cargo
        attributes: ['DESCRIPCION'],
      },
      attributes: ['DNI', 'APELLIDOS', 'NOMBRES', 'DIRECCION', 'TELEFONO'],
      raw: true,
    });

    res.status(200).json(personales);
  } catch (error) {
    console.log(error);
  }
};

const getAllNames = async (req, res) => {
  try {
    const personales = await Personal.findAll({
      where: {
        STATUS: 'actived',
      },
      attributes: ['DNI', 'APELLIDOS', 'NOMBRES'],
      raw: true,
    });

    const names = personales.map(persona => ({
      DNI: persona.DNI,
      EMPLEADO: persona.NOMBRES + ' ' + persona.APELLIDOS,
    }));

    res.status(200).json(names);
  } catch (error) {
    console.log(error);
  }
};

const createPersonal = async (req, res) => {
  try {
    const { DNI, APELLIDOS, NOMBRES, DIRECCION, TELEFONO, IDCARGO } = req.body;

    const personal = await Personal.findOne({ where: { DNI } });

    if (!personal) {
      const newPersonal = await Personal.create({
        DNI,
        APELLIDOS,
        NOMBRES,
        DIRECCION,
        TELEFONO,
        IDCARGO,
      });
      res.status(201).json({ newPersonal });
    } else {
      return res.status(400).json({
        status: 'error',
        message: 'Personal con ese DNI ya esta contratado',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getPersonalById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { personal } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json(personal);
  } catch (error) {
    console.log(error);
  }
};

const updatePersonal = async (req, res) => {
  try {
    const { personal } = req;
    // const { id } = req.params;
    const { DNI, APELLIDOS, NOMBRES, DIRECCION, TELEFONO, IDCARGO } = req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await personal.update({
      DNI,
      APELLIDOS,
      NOMBRES,
      DIRECCION,
      TELEFONO,
      IDCARGO,
    });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deletePersonal = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { personal } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await personal.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPersonales,
  getAllNames,
  createPersonal,
  getPersonalById,
  updatePersonal,
  deletePersonal,
};
