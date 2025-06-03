const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/personas', (req, res) => {
  db.query('SELECT * FROM personas', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.get('/api/personas/:id/entrevistas', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM entrevistas WHERE persona_id = ?', [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.get('/api/entrevistas/:id/multimedia', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM multimedia WHERE entrevista_id = ?', [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// IA cultural simulada
app.post('/api/generar-historia', (req, res) => {
  const { parroquia, tema } = req.body;
  const inicios = [
    `En la parroquia de ${parroquia}, se cuenta que`,
    `Desde tiempos antiguos en ${parroquia},`,
    `Las abuelas de ${parroquia} narran que`,
  ];
  const desarrollos = [
    `${tema} era parte vital de su identidad.`,
    `la gente celebraba ${tema} con devoción.`,
    `${tema} unía a las familias en comunidad.`,
  ];
  const finales = [
    `Hoy, esa costumbre vive en sus relatos.`,
    `Aunque el tiempo pase, sigue presente.`,
    `Una tradición que sigue latiendo.`,
  ];
  const rand = arr => arr[Math.floor(Math.random() * arr.length)];
  const historia = `${rand(inicios)} ${rand(desarrollos)} ${rand(finales)}`;
  res.json({ historia });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
