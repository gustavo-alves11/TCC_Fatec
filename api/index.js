const express = require('express') // importando biblioteca responsável pelas APIs
const routes = require('./routes') //  importa o arquivo index de routes 

const app= express() //instancia o express
const port = 3000 // porta que vamos usar

routes(app) // passa o app como parametro para a função routes que importamos 

app.listen(port, ()=> console.log(`servidor rodando na porta ${port}`)) //servidor iniciado 


module.exports = app 