import chalk from 'chalk'
import inquirer from 'inquirer'

inquirer.prompt([{
    name: 'nome',
    message: 'Digite o seu nome: '
  },{
    name: 'idade',
    message: 'Digite a sua idade: '
  }
]).then((answers => {

  if(!answers.nome || !answers.idade) {
    throw new Error('O nome e idade são obrigatórios!')
  }
    console.log(chalk.bgYellow(`O seu nome é ${answers.nome} e você tem ${answers.idade} anos!!`))
  }))
  .catch((err) => {
    console.log(`Detectamos algo... Foi encontrado um novo ${err}`)
  })