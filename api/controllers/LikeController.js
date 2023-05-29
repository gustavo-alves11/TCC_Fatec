const database = require('../models')

class LikeController {
    static async pegaLikes(req, res){
        try{
            const Likes = await database.like.findAll()
            return res.status(200).json(Likes)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        }
    static async cadastraLikes(req, res){
        let likes = req.body
        try{
            const novoLikeCriado = await database.like.create(likes)
            return res.status(200).json(novoLikeCriado)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    static async buscaPorUsuario(req, res){  ///usuario que deu o like, vamos mostrar todas as curtidas da pessoa
        const pessoaLike = req.body.pessoaLike
        try{
            const likes = await database.like.findOne( {where: {
                pessoaLike : pessoaLike}})
            return res.status(200).json(likes)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }
        
    }
    
    
    static async removeLike(req,res){
        const {id} = req.params
        try{
            await database.like.destroy({where:{ 
                idLike:Number(id)}})
            return res.status(200).json({message: `Like removido com sucesso`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = LikeController