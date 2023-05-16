const {Router} = require('express')
const PostsController = require('../controllers/PostController.js')

const { eAdmin } = require('../middlewares/auth.js');
const PostController = require('../controllers/PostController.js');
const router = Router()


router.get('/posts', PostsController.pegaPosts)
router.get('/posts/:id', PostController.buscaPorId)
router.post('/posts', PostController.cadastraPosts)
router.put('/posts', PostController.alterarposts)

module.exports = router