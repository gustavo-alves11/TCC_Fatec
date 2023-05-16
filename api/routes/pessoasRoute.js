const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const { eAdmin } = require('../middlewares/auth.js');
const router = Router()


router.get('/pessoas', eAdmin, PessoaController.pegaPessoas)
router.get('/pessoas/:id', eAdmin, PessoaController.buscaPorEmail)
router.post('/pessoas', PessoaController.cadastraPessoas)
router.put('/pessoas', PessoaController.alterarPessoa),
router.post('/login', PessoaController.login)

module.exports = router