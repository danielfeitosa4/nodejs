const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/', (req, res) => {

  const user = {
    name: 'Daniel',
    surname: 'Feitosa',
    age: 22,
  }

  const phrase = 'Essa é a seção 3 do curdo de Node.js, e estamos conhecendo mais do Handlebars.'

  const auth = false

  res.render('home', {user: user, phrase, auth})
})

app.listen(3000, () => {
  console.log('App funcionando!')
})