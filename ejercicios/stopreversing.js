//Haz una función que vuelva del revés strings
//La función debe devolver un string como el original, pero con el orden al inverso
// Hola => aloH
// Lorem ipsum => muspi meroL
//Sólo puedes usar una linea de código

//const reverse = () => 

/*
function reverse(str){
    const array = str.split("") // ["H","o","l","a"]
    const array_modificado = array.reverse()
    return array_modificado.join("")
    }
const a = reverse("Lorem ipsum dolor est")    
console.log(a)

 */   


//convertir string a array
//crear string vacio para el resultado
// hacer un bucle que vaya de str.length a 0
//asignar el valor que estamos recorriendo

/*
const array = str.split("") // ["H","o","l","a"]
const resultado = []
for(let i = str.length -1; i >= 0; i--){
    resultado.push(array[i])
}
return resultado.join("")

}
const a = reverse("Loerem ipsum dolor est")
console.log(a)
reverse("Hola")
*/

/*
function reverse(str){
    return str.split("").reverse().join("")
}*/

const reverse = (str) => str.split("").reverse().join("")

/*
const a = reverse("Lorem ipsum dolor est")    
console.log(a)*/


module.exports = reverse