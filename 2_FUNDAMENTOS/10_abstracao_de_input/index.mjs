import inquirer from 'inquirer'
import chalk from 'chalk'

inquirer.prompt([
    { name: 'p1', message: 'Qual a primeira nota?' },
    { name: 'p2', message: 'Qual a segunda nota?' },
  ])
  .then((answers) => {
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2

    console.log(`A média do aluno é ${media}`)

    if(media > 6) {
      console.log(chalk.bgGreen('Aluno Aprovado!'))
    } else {
      console.log(chalk.bgRed('Aluno Reprovado!'))
    }
  })
  .catch((err) => {
    console.log(`Erro de: ${err}`)
  })