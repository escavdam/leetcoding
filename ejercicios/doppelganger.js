//Haz una función que refleje un string
//La función debe devolver una copia del string en el orden original, seguido de su copia inversa
// Hola => HolaaloH

//const doppel = (str) =>


const doppel = (str) => str += str.split("").reverse().join("")


console.log(doppel("Hola"))
module.exports = doppel


//HECHO