const {Router} = require('express')
const FuncaoController = require('../controllers/EsporteController.js')

const router = Router()


router.get('/esportes', FuncaoController.pegaEsportes)


module.exports = router