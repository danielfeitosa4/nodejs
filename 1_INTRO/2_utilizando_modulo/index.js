const fs = require('fs') // File System

fs.readFile('./arquivo.txt', 'utf-8', (err, data) => {

  if(err) {
    console.log(`O seguinte erro foi detectado: ${err}`)
    return
  } else {
    console.log(data)
  }

})