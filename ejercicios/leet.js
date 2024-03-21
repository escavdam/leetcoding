//Crea una función que convierta un string a 13375p34k
//La funcion debe devolver un string que modifique los siguientes caracteres:
//o || O => 0
//i || I => 1
//e || E => 3
//a || A => 4
//s || S => 5
//t || T => 7
//b || B => 8
//g || G => 9
// hola => h0l4
//no puedes usar objetos, ni ifs, ni bucles.

const leet = (str) => {
  const miMapa = new Map();
  miMapa.set("o", "0")
  miMapa.set("O", "0")
  miMapa.set("i", "1")
  miMapa.set("I", "1")
  miMapa.set("e", "3")
  miMapa.set("E", "3")
  miMapa.set("a", "4")
  miMapa.set("A", "4")
  miMapa.set("s", "5")
  miMapa.set("S", "5")
  miMapa.set("t", "7")
  miMapa.set("T", "7")
  miMapa.set("b", "8")
  miMapa.set("B", "8")
  miMapa.set("g", "9")
  miMapa.set("G", "9")
  return str.split("").map(caracter => miMapa.has(caracter) ?  miMapa.get(caracter) : caracter).join("");
}
console.log(leet("cumeado por pendejo"))
module.exports = leet
