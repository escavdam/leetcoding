//Haz una función que vuelva del revés strings
//La función debe devolver un string como el original, pero con el orden al inverso
// Hola => aloH
// Lorem ipsum => muspi meroL
//Sólo puedes usar una linea de código

//const reverse = () => 

//function reverse(str){
// convertir string a array
// hacer bucle q vaya de str.length a 0 
// asignar el valor q estamos recorriendo 
// const arr = str.split("") // ("H", "O", "L", "A")
// const resultado = []
// for(let i = str.length-1; i >= 0; i--){
//   resultado.push(arr[i])
// }
//  return resultado.join("")
// }
// const a = reverse("hola") 
// console.log(a)

// function reverse(str){
   
//     const arr = str.split("") // ("H", "O", "L", "A")
//     const arrModificado = arr.reverse();
//      return arrModificado.join("")
//     }
//     const a = reverse("hola") 
//     console.log(a)

// function reverse(str){
//       return str.split("").reverse().join("")
//     }

    const reverse = (str) => str.split("")
    .reverse()
    .join("")
    
    
    console.log(reverse("Donde caemos gente"))
    
    module.exports = reverse