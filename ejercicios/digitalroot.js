// Calcula la raiz digital de un número
// La raiz digital de un número es la suma de sus digitos hasta que el resultado sea un solo digito
// 942 => 9+4+2 = 15 => 1+5 = 6
// 942 tiene raiz digital 6
// Solo puedes usar una linea de código

const digitalRoot = (n) => {
    if(n.toString().split("").length > 1){
      const arr = n.toString().split("").map(item => parseInt(item))
      const resultado = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      return digitalRoot(resultado)
    }
    return n
}
  
console.log(digitalRoot(69));

module.exports = digitalRoot
