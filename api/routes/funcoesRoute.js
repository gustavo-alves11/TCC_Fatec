const {Router} = require('express')
const FuncaoController = require('../controllers/FuncaoController.js')

const router = Router()


router.get('/funcoes', FuncaoController.pegaFuncoes)


module.exports = router