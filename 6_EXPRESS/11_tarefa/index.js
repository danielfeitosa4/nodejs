// Importando arquivo de rota (routes/index.js)
const pageHome = require('./routes')

// Importacoes de modulos
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const morganBody = require('morgan-body')
const fs = require('fs')
const moment = require('moment')

// Definicao da porta
const port = 3000
// Variavel que acessa os arquivos .html da minha pasta 'templates'
const basePath = path.join(__dirname, 'templates')

// Logs
app.use(bodyParser.json())

const log = fs.createWriteStream(
  path.join(__dirname, './logs', `express${moment().format('YYYY-MM-DD')}.log`),
  {flags: 'a'}
)

morganBody(app, {
  noColors: true,
  stream: log
})

// Ler o conteúdo prenchido no form
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Uso da folha de estilos css
app.use(express.static('public'))

// Utilizacao da rota criada no (routes/index.js)
app.use('/routes', pageHome)

// Rota padrao ao acessar /
app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

// Rota para pagina 404
app.use((req, res) => {
  res.status(404).sendFile(`${basePath}/404.html`)
})

// Utilizacao da porta para rodar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})