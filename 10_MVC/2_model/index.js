const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const Task = require('./models/Task')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Middleware para ler o que ver no corpo da requisicao
app.use(
  express.urlencoded({
    extended: true
  })
)

// Middleware para ler o JSON
app.use(express.json)

// Pastas estaticas CSS
app.use(express.static('public'))

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))