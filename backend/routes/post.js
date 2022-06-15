const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');
const multer = require('../middlewares/multer-config');

const postCtrl = require('../controllers/post');

router.post('/', auth, multer,  postCtrl.createPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.put('/:id', auth, multer, isAdmin, postCtrl.modifyPost);
router.delete('/:id', auth, isAdmin, postCtrl.deletePost);
router.get('/' + '', auth, postCtrl.getAllPosts);
router.post("/:id/like", auth, postCtrl.likePost);

module.exports = router;