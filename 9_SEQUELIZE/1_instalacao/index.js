const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, (err) => {
  console.log('Servidor Funcionando!')
})