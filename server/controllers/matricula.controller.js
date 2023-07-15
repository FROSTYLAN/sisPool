const { where } = require('sequelize');
const { Alumno } = require('../models/Alumno.model');
const { Descuento } = require('../models/Descuento.model');
const { Matricula } = require('../models/Matricula.model');
const { Nivel } = require('../models/Nivel.model');
const { Personal } = require('../models/Personal.model');
const { Piscina } = require('../models/Piscina.model');
const { ProgramacionClase } = require('../models/ProgramacionClase.model');
const { Tarifa } = require('../models/Tarifa.model');
const { Turno } = require('../models/Turno.model');
const { Vacante } = require('../models/Vacante.model');

const getAllMatriculas = async (req, res) => {
  try {
    const matriculas = await Matricula.findAll({
      where: {
        STATUS: 'actived',
      },
    });

    const names = await Promise.all(
      matriculas.map(async matricula => {
        const alumno = await Alumno.findOne({
          where: { DNI: matricula.IDALUMNO, STATUS: 'actived' },
        });
        const monto = await Tarifa.findOne({
          where: { ID: matricula.IDMONTO, STATUS: 'actived' },
        });
        const descuento = await Descuento.findOne({
          where: { ID: matricula.IDDESCUENTO, STATUS: 'actived' },
        });
        const vacante = await Vacante.findOne({
          where: { ID: matricula.IDVACANTE, STATUS: 'actived' },
        });
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
          ID: matricula.ID,
          ALUMNO: `${alumno.NOMBRES} ${alumno.APELLIDOS}`,
          PROGRAMACION: `${personal.NOMBRES} ${personal.APELLIDOS} | ${turno.DESCRIPCION} | ${nivel.DESCRIPCION} | ${piscina.DESCRIPCION}`,
          MONTO: `${monto.DESCRIPCION} (S/.${monto.MONTO})`,
          DESCUENTO: `${descuento.DESCRIPCION} (S/.${descuento.MONTO_DSCTO})`,
          TOTAL: `${monto.MONTO - descuento.MONTO_DSCTO}`,
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

const createMatricula = async (req, res) => {
  try {
    const { IDALUMNO, IDVACANTE, IDMONTO, IDDESCUENTO } = req.body;

    const matricula = await Matricula.findOne({ where: { IDALUMNO } });

    const vacante = await Vacante.findOne({
      where: { ID: IDVACANTE, STATUS: 'actived' },
    });

    if (matricula) {
      return res.status(300).json({
        status: 'error',
        message: 'Ese alumno ya esta matriculado',
      });
    }

    if (vacante.NROVACANTES < 0) {
      return res.status(300).json({
        status: 'error',
        message: 'Ya no hay vacantes',
      });
    } else {
      await vacante.update({ NROVACANTES: vacante.NROVACANTES - 1 });
    }

    const newMatricula = await Matricula.create({
      IDALUMNO,
      IDVACANTE,
      IDMONTO,
      IDDESCUENTO,
    });

    res.status(201).json({ newMatricula });
  } catch (error) {
    console.log(error);
  }
};

const getMatriculaById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { matricula } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    res.status(200).json(matricula);
  } catch (error) {
    console.log(error);
  }
};

const updateMatricula = async (req, res) => {
  try {
    const { matricula } = req;
    // const { id } = req.params;
    const { IDALUMNO, IDVACANTE, IDMONTO, IDDESCUENTO } = req.body;

    // await Cliente.update({ name }, { where: { id } });
    // const Cliente = await Cliente.findOne({ where: { id } });

    await matricula.update({ IDALUMNO, IDVACANTE, IDMONTO, IDDESCUENTO });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteMatricula = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { matricula } = req;
    // SELECT * FROM Clientes WHERE id=?
    // const Cliente = await Cliente.findOne({ where: { id } });

    // DELETE FROM ...
    // await Cliente.destroy();
    await matricula.update({ STATUS: 'deleted' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllMatriculas,
  getAllNames,
  createMatricula,
  getMatriculaById,
  updateMatricula,
  deleteMatricula,
};
