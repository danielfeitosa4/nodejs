// Importacoes de modulos
const express = require('express')
const router = express.Router()
const path = require('path')

// Variavel que acessa os arquivos .html da minha pasta 'templates'
const basePath = path.join(__dirname, '../templates')

// Criacao de rota para pagina home com mini validacao de usuario e senha
router.post('/form', (req, res) => {

  const email = req.body.email
  const password = req.body.password

  if(email === "daniel.gama@gmail.com" && password === "root@2023") {
    res.sendFile(`${basePath}/home.html`)
    console.log(`Login com sucesso! Email: ${email} - Senha: ${password}`)
  } else {
    res.sendFile(`${basePath}/index.html`)
    console.log(`Falha na autenticação => Email: ${email} - Senha: ${password}`)
  }

})

module.exports = router