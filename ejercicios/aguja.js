//Busca la aguja en el array
//La funcion debe devolver la posicion en la que se encuentra la aguja en un array de strings
//Input: ["gato", "pan", "aguja", "coche"]
//Output: 2

const needle = (aguja) =>{
    for (let i = 0; i < aguja.length; i++){
        if(aguja[i] === 'aguja') return i;
    }
}

console.log(needle(['gato', 'pan', 'aguja', 'coche']));
module.exports = needle
