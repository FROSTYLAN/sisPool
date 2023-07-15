const { Nivel } = require('../models/Nivel.model');
const { Personal } = require('../models/Personal.model');
const { Piscina } = require('../models/Piscina.model');
const { ProgramacionClase } = require('../models/ProgramacionClase.model');
const { Turno } = require('../models/Turno.model');

const getAllProgramaciones = async (req, res) => {
  try {
    const programaciones = await ProgramacionClase.findAll({
      where: {
        STATUS: 'actived',
      },
      include: [
        {
          model: Personal,
          attributes: ['NOMBRES'],
        },
        {
          model: Turno,
          attributes: ['DESCRIPCION'],
        },
        {
          model: Nivel,
          attributes: ['DESCRIPCION'],
        },
        {
          model: Piscina,
          attributes: ['DESCRIPCION'],
        },
      ],
      attributes: ['ID'], // Agrega 'ID' a la lista de atributos
      raw: true,
    });

    res.status(200).json(programaciones);
  } catch (error) {
    console.log(error);
  }
};

const getAllNames = async (req, res) => {
  try {
    const programaciones = await ProgramacionClase.findAll({
      where: {
        STATUS: 'actived',
      },
    });

    const names = await Promise.all(
      programaciones.map(async prog => {
        const personal = await Personal.findOne({
          where: { DNI: prog.IDPERSONAL, STATUS: 'actived' },
        });

        const turno = await Turno.findOne({
          where: { ID: prog.IDTURNO, STATUS: 'actived' },
        });

        const nivel = await Nivel.findOne({
          where: { ID: prog.IDNIVEL, STATUS: 'actived' },
        });

        const piscina = await Piscina.findOne({
          where: { ID: prog.IDPISCINA, STATUS: 'actived' },
        });

        return {
          ID: prog.ID,
          DESCRIPCION: `${personal.NOMBRES} ${personal.APELLIDOS} | ${turno.DESCRIPCION} | ${nivel.DESCRIPCION} | ${piscina.DESCRIPCION}`,
        };
      })
    );

    res.status(200).json(names);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createProgramacion = async (req, res) => {
  try {
    const { IDTURNO, IDNIVEL, IDPISCINA, IDPERSONAL } = req.body;

    const newProgramacion = await ProgramacionClase.create({
      IDTURNO,
      IDNIVEL,
      IDPISCINA,
      IDPERSONAL,
    });

    res.status(201).json({ newProgramacion });
  } catch (error) {
    console.log(error);
  }
};

const getProgramacionById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { programacion } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json(programacion);
  } catch (error) {
    console.log(error);
  }
};

const updateProgramacion = async (req, res) => {
  try {
    const { programacion } = req;
    // const { id } = req.params;
    const { iDTURNO, IDNIVEL, IDPISCINA, IDPERSONAL } = req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await programacion.update({
      iDTURNO,
      IDNIVEL,
      IDPISCINA,
      IDPERSONAL,
    });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteProgramacion = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { programacion } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await programacion.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProgramaciones,
  getAllNames,
  createProgramacion,
  getProgramacionById,
  updateProgramacion,
  deleteProgramacion,
};
