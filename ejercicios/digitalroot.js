// Calcula la raiz digital de un número
// La raiz digital de un número es la suma de sus digitos hasta que el resultado sea un solo digito
// 942 => 9+4+2 = 15 => 1+5 = 6
// 942 tiene raiz digital 6
// Solo puedes usar una linea de código

const digitalRoot = (num) => {
    if (num.toString().length > 1) {
      const array = num.toString().split("").map(item => parseInt(item));
      const resultado = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      return digitalRoot(resultado);
    }
    return num;
  }
  
  console.log(digitalRoot(942));

module.exports = digitalRoot
