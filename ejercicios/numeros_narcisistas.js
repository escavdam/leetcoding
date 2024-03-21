// Haz una función que devuelva si un número es narcisista
// Un número narcisista es aquel que es igual a la suma de sus digitos elevados al número de digitos que tiene:
// 153 tiene 3 digitos:
// 1^3 + 5^3 + 3^3 = 153
// 153 es narcisista, devolverá true

const isNarcissist = (n) => {
    
    const arrStrings = n.toString().split("")
    const arrNumeros = arrStrings.map(char =>parseInt(char))
    const arrayPotencias = arrNumeros.map(numero => Math.pow(numero, arrNumeros.length))
    const resultado = arrayPotencias.reduce((acumulador, valor) => acumulador + valor, 0)
    console.log(resultado)
    return resultado === n
}

console.log(isNarcissist(153))
isNarcissist(153)

module.exports = isNarcissist

//node .\ejercicios\numeros_narcisistas.js