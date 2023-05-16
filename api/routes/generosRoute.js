const {Router} = require('express')
const FuncaoController = require('../controllers/GeneroController.js')

const router = Router()


router.get('/generos', FuncaoController.pegaGeneros)


module.exports = router