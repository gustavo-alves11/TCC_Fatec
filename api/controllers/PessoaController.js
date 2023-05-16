const database = require('../models')
//const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

class PessoaController {
    static async pegaPessoas(req, res){
        try{
            const todasPessoas = await database.pessoa.findAll()
            return res.status(200).json(todasPessoas)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        }
    static async cadastraPessoas(req, res){
        let pessoa = req.body
        pessoa.senhaPessoa = await bcrypt.hash("123456", 8);
        try{
            console.log(pessoa)
            const novaPessoaCriada = await database.pessoa.create(pessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    static async buscaPorEmail(req, res){
        const email = req.body.emailPessoa
        try{
            const Pessoa = await database.pessoa.findOne( {where: {
                emailPessoa : email}})
            return res.status(200).json(Pessoa)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }
        
    }

    static async login(req, res){
            const email = req.body.emailPessoa
            const senha = req.body.senhaPessoa
        try{    
            const Pessoa = await database.pessoa.findOne( {where: {
                    emailPessoa : email}})
            
            if(!(Pessoa.emailPessoa == email)){
                return res.status(400).json({
                    erro: true,
                    mensagem: "Erro: Usuário ou a senha incorreta! E-mail incorreto!"
                });
            }
            
            if(!(Pessoa.senhaPessoa == senha)){
                return res.status(400).json({
                    erro: true,
                    mensagem: "Erro: Usuário ou a senha incorreta! Senha incorreta!"
                });
            }
            
            var token = jwt.sign({id: Pessoa.idPessoa}, "D62ST92Y7A6V7K5C6W9ZU6W8KS3", {
                //expiresIn: 600 //10 min
                expiresIn: 60 //1 min
                //expiresIn: 3600
            });
            return res.send({Pessoa, token})//.json({
                // erro: false,
                // mensagem: "Login realizado com sucesso!",
                // token
            
        }
        catch(erro){
            return res.status(500).json(erro.message)
        }
    
    }
    static async alterarPessoa(req,res){
        const {id} = req.params
        const Novasinfos = req.body
        try{
            await database.pessoa.update(Novasinfos, {wher: {id: Number(id)}})
            const pessoaAtualizada = await database.pessoa.findOne({where:{ 
                id:Number(id)}})
                return res.status(200).json(pessoaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }

    }
    
}

module.exports = PessoaController