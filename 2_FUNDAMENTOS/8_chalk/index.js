const chalk = require('chalk')

const nota = 5

if(nota >= 6) {
  console.log(chalk.bgGreen(`Aprovado com a nota: ${nota}`))
} else {
  console.log(chalk.bgRed(`Reprovado com a nota: ${nota}`))
}