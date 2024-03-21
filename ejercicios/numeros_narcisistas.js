// Haz una función que devuelva si un número es narcisista
// Un número narcisista es aquel que es igual a la suma de sus digitos elevados al número de digitos que tiene:
// 153 tiene 3 digitos:
// 1^3 + 5^3 + 3^3 = 153
// 153 es narcisista, devolverá true

const isNarcissist = (num) =>{
    const numString = num.toString();
    const arrNumeros = numString.split("")
    const arrPotencias = arrNumeros.map(x=> Math.pow(parseInt(x),arrNumeros.length));
    console.log(arrNumeros)
}

isNarcissist(153)
module.exports = isNarcissist

