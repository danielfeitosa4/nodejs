const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir:['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

  const items = ['Item a', 'Item b', 'Item c']

  res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.js...',
    comments: 4,
  }

  res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {

  const posts = [
    {
      title: 'Aprender Node.js',
      category: 'JavaScript',
      body: 'Test Node.js',
      comments: 4,
    },
    {
      title: 'Aprender PHP',
      category: 'PHP',
      body: 'Test PHP',
      comments: 9,
    },
    {
      title: 'Aprender Python',
      category: 'Python',
      body: 'Test Python',
      comments: 6,
    },
  ]

  res.render('blog', {posts})
})

app.get('/', (req, res) => {

  const user = {
    name: 'Daniel',
    surname: 'Feitosa',
    age: 22,
  }

  const phrase = 'Essa é a seção 3 do curdo de Node.js, e estamos conhecendo mais do Handlebars.'

  const auth = true

  const approved = false

  res.render('home', {user: user, phrase, auth, approved})
})

app.listen(3000, () => {
  console.log('App funcionando!')
})