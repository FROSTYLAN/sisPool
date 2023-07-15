const { app } = require('./app');
const { Alumno } = require('./models/Alumno.model');

const { Cargo } = require('./models/Cargo.model');
const { Descuento } = require('./models/Descuento.model');
const { Dia } = require('./models/Dia.model');
const { Matricula } = require('./models/Matricula.model');
const { Nivel } = require('./models/Nivel.model');
const { Personal } = require('./models/Personal.model');
const { Piscina } = require('./models/Piscina.model');
const { ProgramacionClase } = require('./models/ProgramacionClase.model');
const { Tarifa } = require('./models/Tarifa.model');
const { Turno } = require('./models/Turno.model');
const { Vacante } = require('./models/Vacante.model');

// Utils
const { db } = require('./utils/database');

db.authenticate()
  .then(() => {
    console.log('Database authenticated');
  })
  .catch(err => console.log(err));

// RelationShip

Personal.belongsTo(Cargo, { foreignKey: 'IDCARGO', as: 'CARGO' });

// Define the association between Dia and Turno
Turno.belongsTo(Dia, { foreignKey: 'IDDIAS', as: 'DIAS' });

// Define the association between Dia and Turno
ProgramacionClase.belongsTo(Turno, { foreignKey: 'IDTURNO' });
ProgramacionClase.belongsTo(Nivel, { foreignKey: 'IDNIVEL' });
ProgramacionClase.belongsTo(Piscina, { foreignKey: 'IDPISCINA' });
ProgramacionClase.belongsTo(Personal, { foreignKey: 'IDPERSONAL' });

// Define the association between Dia and Turno
Matricula.belongsTo(Alumno, { foreignKey: 'IDALUMNO' });
Matricula.belongsTo(Vacante, { foreignKey: 'IDVACANTE' });
Matricula.belongsTo(Tarifa, { foreignKey: 'IDMONTO' });
Matricula.belongsTo(Descuento, { foreignKey: 'IDDESCUENTO' });

// Sync model from the database
db.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.log(err));

// Spin up server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
