//Crea una función que cuente el número de veces que aparece una palabra en un texto.
//Asegurate de filtrar caracteres especiales en palabras, como las que terminan en "." o comienzan con "¿".
//Utiliza la variable libro para contar el número de veces que aparece la palabra "señor".
const fs = require('fs')
const path = require('path')
const libro = fs.readFileSync(path.join(__dirname, "./biblia.txt"), 'utf-8')

const cuentaPalabras = (str) => console.log(str)
cuentaPalabras(libro)

module.exports = cuentaPalabras