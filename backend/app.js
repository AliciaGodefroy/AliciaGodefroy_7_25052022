const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const path = require('path');
const dotenv = require("dotenv");
dotenv.config();
// const rateLimit = require('express-rate-limit');
// const helmet = require("helmet");

//Changement test

mongoose.connect(process.env.SECRET_DB,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

// //Mesure de sécurité avec express-rate-limite
// const limiter = rateLimit({
//   windowMS: 15 * 60 * 1000, // Fenêtre de 15min
//   max: 20, // on limite chaque adresse IP à 20 appels (requests) par fenêtre de 15min
// });
// app.use(limiter);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json()); //Donne accès au corps de la requête

// app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;