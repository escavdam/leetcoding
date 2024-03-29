// Calcula la raiz digital de un número
// La raiz digital de un número es la suma de sus digitos hasta que el resultado sea un solo digito
// 942 => 9+4+2 = 15 => 1+5 = 6
// 942 tiene raiz digital 6
// Solo puedes usar una linea de código

const digitalRoot = (num) => 
  (num = num.toString(), num = num.split(''))
    .reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0)
    .toString()
    .split('')
    .reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0)
    .toString();

console.log(digitalRoot(942));

module.exports = digitalRoot
