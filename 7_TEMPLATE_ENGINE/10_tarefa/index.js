const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

// const hbs = exphbs.create({
//   partialsDir: ['views/partials']
// })

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
  {
    id: '1',
    name: 'Pão',
    price: 10.40
  },
  {
    id: '2',
    name: 'Ovos',
    price: 23.59
  },
  {
    id: '3',
    name: 'Presunto',
    price: 17.00
  },
  {
    id: '4',
    name: 'Queijo',
    price: 20.00
  },
]

// Link dinâmico de cada produto
app.get('/product/:id', (req, res) => {
  const product = products[parseInt(req.params.id) - 1]

  res.render('product', {product})
})

// Lista de produtos
app.get('/list', (req, res) => {
  res.render('list', {products})
})

// Home
app.get('/', (req, res) => {

  res.render('home')
})

app.listen(3000, () => {
  console.log('App Rodando!')
})