const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const User = require('../models/user');
const Post = require ('../models/post');
const fs = require('fs');

//Pour créer un objet
exports.createPost = (req, res, next) => {
  const postObject = { ...req.body };
  delete postObject._id;
  const post = new Post({
    ...postObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0,
    usersLiked: [],
  });
  post.save()
    .then(() => res.status(201).json({ message: 'Nouveau post publié !'}))
    .catch(error => res.status(400).json({ error }));
};

//Pour modifier un objet
exports.modifyPost = (req, res, next) => {
  // recuperer le token dans la chaine de string (enlever le mot bearer et l'espace)
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
  const decodedUserId = decodedToken.userId;
  Post.findOne({ _id: req.params.id }).then((data)=>{
    User.findOne({
      _id: decodedUserId
    }).then((dataUser) => {
      // On compare l'userId du post avec l'userId du Token
    if (data.userId == decodedUserId || dataUser.isAdmin == true) {
      console.log('data.userId', data.userId)
      console.log('decodedUserId', decodedUserId)
      const postObject = req.file ?
        {
          imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };
      Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Le post a été modifié !'}))
        .catch(error => res.status(400).json({ error }));
    }
    else {
      res.status(401).json({ message: "Vous n'avez pas la permission !"})
    }
    }).catch(error => res.status(400).json({ error }));
  })
};

//Pour supprimer un objet
exports.deletePost = (req, res, next) => {
  // recuperer le token dans la chaine de string (enlever le mot bearer et l'espace)
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
  const decodedUserId = decodedToken.userId;
  Post.findOne({ _id: req.params.id }).then((data)=>{
    User.findOne({
      _id: decodedUserId
    }).then((dataUser) => {
      if (data.userId == decodedUserId || dataUser.isAdmin == true) {
        // console.log('data.userId', data.userId)
        // console.log('decodedUserId', decodedUserId)
        Post.findOne({ _id: req.params.id })
        .then(post => {
          const filename = post.imageUrl.split('/images/')[1];
          fs.unlink(`images/${filename}`, () => {
            Post.deleteOne({ _id: req.params.id })
              .then(() => res.status(200).json({ message: 'Post supprimée !'}))
              .catch(error => res.status(400).json({ error }));
          });
      })
      .catch(error => res.status(500).json({ error }));
      } else {
        res.status(401).json({ message: "Vous n'avez pas la permission !"})
      }
    }).catch(error => res.status(400).json({ error }));
  })
};

//Pour récupérer un seul objet
exports.getOnePost = (req, res, next) => { //.get et non .use pour indiquer que ce sont uniquement les requêtes GET que nous allons intercepter à ce moment là avec ce middleware
    Post.findOne({ //Pour trouver un seul objet - On veut que l'id soit le même que le paramêtre de requête
      _id: req.params.id
    }).then(
      (post) => {
        res.status(200).json(post);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
}

//Pour récupérer tous les objets 
exports.getAllPosts = (req, res, next) => {
  const sort = { _id: -1}
    Post.find().sort(sort).then(
      (posts) => {
        res.status(200).json(posts); //On récupère le tableau de tous les things retournés par la base
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
}

// Pour ajouter un like
exports.likePost = (req, res, next) => {
  let likes = req.body.likes // On récupère le nombre de likes
  let userId = req.body.userId // On récupère l'userId
  let postId = req.params.id // On récupère l'id du post

  // On utilise la fonction updateOne() pour mettre à jour le like de l'userId sur le post
  Post.updateOne({ _id: postId }, { $push: { usersLiked: userId }, $inc: { likes: +1 }}) 
    .then(() => res.status(200).json({ message: `J'aime` }))
    .catch((error) => res.status(400).json({ error }))
}

