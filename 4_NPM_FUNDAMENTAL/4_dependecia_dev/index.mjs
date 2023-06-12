import _ from 'lodash'
import chalk from 'chalk' // a versão mais nova do chalk só reconhece arquivos 'mjs' que utilizam o import

const a = [1,2,3,4,5]
const b = [1,4,6,4,8]

const diff = _.difference(a,b)

console.log(chalk.red(diff))