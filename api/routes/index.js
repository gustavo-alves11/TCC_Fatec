const bodyParser = require('body-parser')// importa a biblioteca que trabalha com o padrão de arquivo 
const funcoes = require('./funcoesRoute.js')
const generos = require('./generosRoute.js')
const esportes= require('./esporteRoute.js')
const pessoas = require('./pessoasRoute.js')
const likes = require('./likesRoutes.js')
const posts = require('./postsRoute.js')

module.exports = app => { 
    app.use(bodyParser.json(),
    funcoes,
    generos,
    esportes,
    pessoas,
    likes,
    posts
    )
    
}

