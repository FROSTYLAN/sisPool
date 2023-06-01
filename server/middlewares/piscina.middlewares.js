// Models
const { Piscina } = require('../models/piscina.model');

const piscinaExists = async (req, res, next) => {
  try {
    const { id } = req.params; // { id }

    // SELECT * FROM piscinas WHERE id=?
    const piscina = await Piscina.findOne({ where: { id } });

    if (!piscina) {
      return res.status(404).json({
        status: 'error',
        message: 'pool not found given that id',
      });
    }

    // Add piscina data to the req object
    req.piscina = piscina;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { piscinaExists };
