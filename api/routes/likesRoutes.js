const {Router} = require('express')
const PostsController = require('../controllers/PostController.js')

const { eAdmin } = require('../middlewares/auth.js');
const LikeController = require('../controllers/LikeController.js');
const router = Router()


router.get('/likes', LikeController.pegaLikes)
router.get('/likes/:id', LikeController.buscaPorUsuario)
router.post('/likes', LikeController.cadastraLikes)
router.delete('/likes/:id', LikeController.removeLike)

module.exports = router