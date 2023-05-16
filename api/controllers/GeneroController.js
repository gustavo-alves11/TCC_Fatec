const database = require('../models')



class GeneroController {
    static async pegaGeneros(req, res){
        try{
            const todosGeneros = await database.genero.findAll()
            return res.status(200).json(todosGeneros)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        }

}

module.exports = GeneroController