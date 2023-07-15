const { Nivel } = require('../models/Nivel.model');
const { Personal } = require('../models/Personal.model');
const { Piscina } = require('../models/Piscina.model');
const { ProgramacionClase } = require('../models/ProgramacionClase.model');
const { Turno } = require('../models/Turno.model');
const { Vacante } = require('../models/Vacante.model');

const getAllVacantes = async (req, res) => {
  try {
    const vacantes = await Vacante.findAll({
      where: {
        STATUS: 'actived',
      },
    });

    const names = await Promise.all(
      vacantes.map(async vacante => {
        const prog = await ProgramacionClase.findOne({
          where: { ID: vacante.IDPROGRAMACIONCLASE, STATUS: 'actived' },
        });
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
          ID: vacante.ID,
          MES: vacante.MES,
          NROVACANTES: vacante.NROVACANTES,
          PROGRAMACIONCLASE: `${personal.NOMBRES} ${personal.APELLIDOS} | ${turno.DESCRIPCION} | ${nivel.DESCRIPCION} | ${piscina.DESCRIPCION}`,
        };
      })
    );

    res.status(200).json(names);
  } catch (error) {
    console.log(error);
  }
};

const getAllNames = async (req, res) => {
  try {
    const vacantes = await Vacante.findAll({
      where: {
        STATUS: 'actived',
      },
    });

    const names = await Promise.all(
      vacantes.map(async vacante => {
        const prog = await ProgramacionClase.findOne({
          where: { ID: vacante.IDPROGRAMACIONCLASE, STATUS: 'actived' },
        });
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
          ID: vacante.ID,
          MES: vacante.MES,
          PROGRAMACIONCLASE: `${personal.NOMBRES} ${personal.APELLIDOS} | ${turno.DESCRIPCION} | ${nivel.DESCRIPCION} | ${piscina.DESCRIPCION} | Vacantes Disponibles: ${vacante.NROVACANTES}`,
        };
      })
    );

    res.status(200).json(names);
  } catch (error) {
    console.log(error);
  }
};

const createVacante = async (req, res) => {
  try {
    const { MES, NROVACANTES, IDPROGRAMACIONCLASE } = req.body;

    const newVacante = await Vacante.create({
      MES,
      NROVACANTES,
      IDPROGRAMACIONCLASE,
    });

    res.status(201).json({ newVacante });
  } catch (error) {
    console.log(error);
  }
};

const getVacanteById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { vacante } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json(vacante);
  } catch (error) {
    console.log(error);
  }
};

const updateVacante = async (req, res) => {
  try {
    const { vacante } = req;
    // const { id } = req.params;
    const { MES, NROVACANTES, IDPROGRAMACIONCLASE } = req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await Vacante.update({
      MES,
      NROVACANTES,
      IDPROGRAMACIONCLASE,
    });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteVacante = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { vacante } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await vacante.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllVacantes,
  getAllNames,
  createVacante,
  getVacanteById,
  updateVacante,
  deleteVacante,
};
