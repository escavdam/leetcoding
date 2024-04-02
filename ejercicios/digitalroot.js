// Calcula la raiz digital de un número
// La raiz digital de un número es la suma de sus digitos hasta que el resultado sea un solo digito
// 942 => 9+4+2 = 15 => 1+5 = 6
// 942 tiene raiz digital 6
// Solo puedes usar una linea de código

/**const digitalRoot = (n) => {
    console.log(942)
    const arr = n.toString().split("").map(item => parseInt(item))
    const resultado = arr.reduce((acumulador, currentValue) =>acumulador + currentValue,0)
    console.log(resultado.toString().length)
    if(resultado.toString().length > 1){
        digitalRoot(digitalRoot(resultado));
    } 
}*/

const digitalRoot = (n) =>{
    if(n.toString().split("").length > 1){
        const arr = n.toString().split("").map(item => parseInt(item))
        const resultado = arr.reduce((accumulator, currentValue) => accumulator + currentValue,0);
        return digitalRoot(resultado);

    }
    return n;
}

console.log(digitalRoot(942))

module.exports = digitalRoot
