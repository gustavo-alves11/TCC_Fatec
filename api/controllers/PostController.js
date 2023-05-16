const database = require('../models')
//const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')

class PostController {
    static async pegaPosts(req, res){
        try{
            const Posts = await database.posts.findAll()
            return res.status(200).json(Posts)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        }
    static async cadastraPosts(req, res){
        let posts = req.body
        try{
            const novapostsCriada = await database.posts.create(posts)
            return res.status(200).json(novapostsCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    static async buscaPorId(req, res){
        const idPost = req.body.idPosts
        try{
            const posts = await database.posts.findOne( {where: {
                idPost : idPost}})
            return res.status(200).json(posts)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }
        
    }
    
    static async buscaPorId(req, res){
        const idPost = req.body.idPosts
        try{
            const posts = await database.posts.findOne( {where: {
                idPost : idPost}})
            return res.status(200).json(posts)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }
        
    }
       static async alterarposts(req,res){
        const {id} = req.params
        const Novasinfos = req.body
        try{
            await database.posts.update(Novasinfos, {wher: {id: Number(id)}})
            const postsAtualizado = await database.posts.findOne({where:{ 
                id:Number(id)}})
                return res.status(200).json(postsAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }

    }
    
}

module.exports = PostController