// Haz una función que devuelva si un número es narcisista
// Un número narcisista es aquel que es igual a la suma de sus digitos elevados al número de digitos que tiene:
// 153 tiene 3 digitos:
// 1^3 + 5^3 + 3^3 = 153
// 153 es narcisista, devolverá true

const isNarcissist = (num) => {
    const arrayStr = num.toString().split("");
    const arrayNum = arrayStr.map(char => parseInt(char));
    const arrayPow = arrayNum.map(num => Math.pow(num, arrayNum.length));
    const resultado = arrayPow.reduce((acumulador, valor) => acumulador + valor, 0);
    return resultado === num;
}

console.log(isNarcissist(153));

module.exports = isNarcissist