const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const { eAdmin } = require('../middlewares/auth.js');
const router = Router()


router.get('/pessoas', eAdmin, PessoaController.pegaPessoas)
router.get('/pessoas/:id', eAdmin, PessoaController.buscaPorEmail)
router.post('/pessoas', PessoaController.cadastraPessoas)
router.put('/pessoas/:id', eAdmin, PessoaController.alterarPessoa),
router.delete('/pessoas/:id', eAdmin, PessoaController.removePessoa),
router.post('/login', PessoaController.login),
router.post('/logout', eAdmin, PessoaController.logout)

module.exports = router