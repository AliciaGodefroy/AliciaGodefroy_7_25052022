const mongoose = require('mongoose');

//Création d'un schéma de données avec les informations d'on chaque objet aura besoin
const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  text: { type: String, trim: true, maxlenght: 500 },
  imageUrl: { type: String, required: true },
  likes: { type: Number, required: true },
  usersLiked: { type: [String], required: true },
});

//Export du modèle afin de pouvoir l'utiliser pour intéragir avec notre base de données MongoDB
module.exports = mongoose.model('Post', postSchema);