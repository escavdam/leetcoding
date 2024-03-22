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
    const myMap = new Map();
    myMap.set("o", "0");
    myMap.set("O", "0");
    myMap.set("i", "1");
    myMap.set("I", "1");
    myMap.set("e", "3");
    myMap.set("E", "3");
    myMap.set("a", "4");
    myMap.set("A", "4");
    myMap.set("s", "5");
    myMap.set("S", "5");
    myMap.set("t", "7");
    myMap.set("T", "7");
    myMap.set("b", "8");
    myMap.set("B", "8");
    myMap.set("g", "9");
    myMap.set("G", "9");

    return str.split("").map(caracter => myMap.has(caracter) ? myMap.get(caracter) : caracter).join("");
}
console.log(leet("Hola mundo"));

module.exports = leet