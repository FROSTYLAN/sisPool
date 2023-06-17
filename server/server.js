const { app } = require('./app');

//Models
const { Alumno } = require('./models/Alumno.model');

// Utils
const { db } = require('./utils/database');

db.authenticate()
  .then(() => {
    console.log('Database authenticated');
  })
  .catch(err => console.log(err));

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
