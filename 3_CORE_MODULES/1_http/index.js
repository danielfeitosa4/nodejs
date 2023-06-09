const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

  res.write('Oi HTTP') // Escrever uma resposta pro usuário. Começando com um texto, mas pode sim ser um arquivo
  res.end() // Tenho finalizar a respota com o end(), senão ele fica carregando eternamente

})

// Pra poder executar o "server" eu preciso ouvir(listen) a porta
server.listen(port, () => {
  // funcao de callback
  console.log(`Servidor rodando na porta: ${port}`)
})