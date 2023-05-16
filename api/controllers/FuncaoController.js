const database = require('../models')



class FuncaoController {
    static async pegaFuncoes(req, res){
        try{
            const todasFuncoes = await database.funcao.findAll()
            return res.status(200).json(todasFuncoes)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        }

}

module.exports = FuncaoController