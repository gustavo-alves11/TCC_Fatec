const database = require('../models')
const {Op} = require('sequelize')

class PostController {
    static async pegaPosts(req, res){
        try{
            const Posts = await database.post.findAll()
            return res.status(200).json(Posts)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        }
    static async cadastraPosts(req, res){
        let posts = req.body
        try{
            const novapostsCriada = await database.post.create(posts)
            return res.status(200).json(novapostsCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    static async buscaPorId(req, res){
        const idPost = req.body.idPost
        try{
            const posts = await database.post.findOne( {where: {
                idPost : idPost}})
            return res.status(200).json(posts)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }
        
    }

    static async buscaPorAssunto(req, res){
        const pesquisa = req.body.texto
        try{
            const posts = await database.post.findAll({
                where: { texto: { [Op.like]: `%${pesquisa}%` } },
            limit: 10,});
            return res.status(200).json(posts)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        
    }
    
    // static async buscaPorId(req, res){
    //     const idPost = req.body.idPosts
    //     try{
    //         const posts = await database.posts.findOne( {where: {
    //             idPost : idPost}})
    //         return res.status(200).json(posts)
            
    //     }
    //     catch(error){
    //         return res.status(500)//.json(error.message)
    //     }
        
    // }
       static async alterarposts(req,res){
        const {id} = req.params
        const Novasinfos = req.body
        try{
            await database.post.update(Novasinfos, {where: {idPost: Number(id)}})
            const postsAtualizado = await database.post.findOne({where:{ 
                idPost:Number(id)}})
                return res.status(200).json(postsAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }

    }
    static async removePost(req,res){
        const {id} = req.params
        try{
            await database.post.destroy({where: {idPost: Number(id)}})
            return res.status(200).json({message: `Post removido com sucesso`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PostController