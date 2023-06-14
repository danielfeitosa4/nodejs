// modulos externos
import inquirer from 'inquirer'
import chalk from 'chalk'

// modulos internos
import fs from 'fs'

const operation = () => {

  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'O que você deseja fazer?',
      choices: ['Criar Conta','Consultar Saldo','Depositar','Sacar','Sair',],
    },
  ]).then((answer) => {

    const action = answer['action']

    if(action === 'Criar Conta') {
      createAccount()
    } else if (action === 'Consultar Saldo') {
      getAccountBalance()
    } else if (action === 'Depositar') {
      deposit()
    } else if (action === 'Sacar') {
      withdraw()
    } else if (action === 'Sair') {
      console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
      process.exit()
    }

  })
  .catch((err) => console.log(err))
}

operation();

// create an account
const createAccount = () => {
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))

  buildAccount()
}

const buildAccount = () => {
  
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Digite um nome para a sua conta:'
    }
  ]).then((answer) => {
    const accountName = answer['accountName']

    console.info(accountName)

    if(!fs.existsSync('accounts')) {
      fs.mkdirSync('accounts')
    }

    if(fs.existsSync(`accounts/${accountName}.json`)) {
      console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
      buildAccount()
      return
    }

    const data = JSON.stringify({"balance": 0})
    fs.writeFileSync(`accounts/${accountName}.json`, data, (err) => {
      console.log(err)
    })

    console.log(chalk.green('Parabéns, sua conta foi criada!'))
    operation()

  })
  .catch((err) => console.log(err))

}

// add an amount to user account 
const deposit = () => {

  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome da sua conta?'
    }
  ])
  .then((answer) => {

    const accountName = answer['accountName']

    // verify if account exists
    if(!checkAccount(accountName)) {
      return deposit()
    }

    inquirer.prompt([
      {
        name: 'amount',
        message: 'Quanto você deseja depositar: R$',
      }
    ])
    .then((answer) => {

      const amount = answer['amount']

      // add an amount
      addAmount(accountName, amount)
      operation()

    }).catch((err) => console.log(err))

  }).catch((err) => console.log(err))

}

const checkAccount = (accountName) => {
  
  if(!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black('Essa conta não existe, escolha outro nome!'))
    return false
  }

  return true
}

const addAmount = (accountName, amount) => {

  const accountData = getAccount(accountName)

  if(!amount) {
    console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
    return deposit()
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

  fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (err) => {
    console.log(err)
  })

  console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`))
}

const getAccount = (accountName) => {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf8',
    flag: 'r',
  })

  return JSON.parse(accountJSON)
}

// show account balance
const getAccountBalance = () => {

  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome da sua conta? '
    }
  ])
  .then((answer) => {

    const accountName = answer['accountName']

    // verify if account exists
    if(!checkAccount(accountName)) {
      return getAccountBalance()
    }

    const accountData = getAccount(accountName)

    console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é de R$${accountData.balance}`))

    operation()
  })
  .catch((err) => console.log(err))
}

// withdraw an amount from user account
const withdraw = () => {

  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome da sua conta? '
    }
  ])
  .then((answer) => {

    const accountName = answer['accountName']

    if(!checkAccount(accountName)) {
      return withdraw()
    }

    inquirer.prompt([
      {
        name: 'amount',
        message: 'Qual o valor que deseja sacar?'
      }
    ])
    .then((answer) => {
      const amount = answer['amount']

      removeAmount(accountName, amount)
    })
    .catch((err) => console.log(err))

  })
  .catch((err) => console.log(err))
}

const removeAmount = (accountName, amount) => {

  const accountData = getAccount(accountName)

  if(!amount) {
    console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
    return withdraw()
  }

  if(accountData.balance < amount) {
    console.log(chalk.bgRed.black('Valor indisponível!'))
    return withdraw()
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

  fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (err) => console.log(err))

  console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta.`))
  operation()
}