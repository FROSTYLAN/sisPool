// Models
const { Personal } = require('../models/Personal.model');

const personalExists = async (req, res, next) => {
  try {
    const { DNI } = req.params; // { id }

    // SELECT * FROM clientes WHERE id=?
    const personal = await Personal.findOne({ where: { DNI } });

    if (!personal) {
      return res.status(404).json({
        status: 'error',
        message: 'personal not found given that DNI',
      });
    }

    // Add cliente data to the req object
    req.personal = personal;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { personalExists };
