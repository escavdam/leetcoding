//Haz una función que vuelva del revés strings
//La función debe devolver un string como el original, pero con el orden al inverso
// Hola => aloH
// Lorem ipsum => muspi meroL
//Sólo puedes usar una linea de código

// const reverse = () => 

/*
function reverse(str){
const array = str.split("") // ["H", "o", "l", "a"]
const resultado = []
for(let i = str.length-1; i >= 0; i--){
    resultado.push(array[i])
}
return resultado.join("")
}
*/

/*
function reverse(str){
    const array = str.split("") 
    const array_modificado = array.reverse()
    return array_modificado.join("")
}
*/

/*
function reverse(str){
    return str.split("").reverse().join("")
}
*/

const reverse = (str) => 
str.split("")
.reverse()
.join("")

module.exports = reverse