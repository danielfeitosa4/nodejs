const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', 'Ilovecuscuzs2', {
  host: 'localhost',
  dialect: 'mysql',
})

try {

  sequelize.authenticate()
  console.log('Conectamos com sucesso utilizando o Sequelize!')

} catch (err) {
  console.log('Não foi possível conectar: ', err)
}

module.exports = sequelize