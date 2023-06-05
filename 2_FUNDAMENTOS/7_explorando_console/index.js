// mais de um valor

const x = 10
const y = 'Daniel'
const z = [1,2]

console.log(x,y,z)

// contagem de impressões
console.count(`O valor de x é: ${x}, contagem:`)
console.count(`O valor de x é: ${x}, contagem:`)
console.count(`O valor de x é: ${x}, contagem:`)
console.count(`O valor de x é: ${x}, contagem:`)
console.count(`O valor de x é: ${x}, contagem:`)

// variavel entre string
console.log('O nome dele é %s, e ele é programador', y)

// limpar console
setTimeout(() => {
  console.clear()
}, 2000);