//Haz una función que vuelva del revés strings
//La función debe devolver un string como el original, pero con el orden al inverso
// Hola => aloH
// Lorem ipsum => muspi meroL
//Sólo puedes usar una linea de código

<<<<<<< HEAD
//const reverse = () => 

/*function reverse(str) {

    const array = str.split("")
    const resulta = []
    for(let i =str.length-1; i >= 0; i--){
        resulta.push(array[i])
    }
    return resulta.join("")
} */

/*function reverse(str) {

    const array = str.split("")
    const resulta = []
    const array_modificacion = array.map()
    return array_modificacion.join("")
    return resulta.join("")
}
*/

/*function reverse(str) {
    const resultado = str.split("").reverse().join("")
}
*/

const reverse = (str) =>
str.split("")
.reverse()
.join("")

const a = reverse("Lorem ipsum dolor est")

console.log(a)
=======
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
>>>>>>> main

module.exports = reverse