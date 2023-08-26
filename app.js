const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/register', (req, res) => {
  const registrationData = req.body;
  console.log('Registration data:', registrationData);
  
  res.json({ message:'¡Registro completado con éxito! Hemos recibido tus datos. Próximamente nos pondremos en contacto contigo para proporcionarte información detallada sobre los horarios del taller.' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
