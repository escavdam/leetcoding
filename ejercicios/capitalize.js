// Haz una función para capitalizar palabras
// La función debe devolver la palabra con la primera letra en mayuscula
// hola => Hola
// lorem ipsum => Lorem ipsum
// Solo puedes usar una linea de código

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalize)

module.exports = capitalize

