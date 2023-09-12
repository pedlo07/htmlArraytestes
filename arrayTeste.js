var arrayTeste = ['henrique', 'Mathias', 'Eduardo','Jeferson','Felipe'];

console.log(arrayTeste[0]);
//Adiciona um elemento no inico da array (unshift)
arrayTeste.unshift('Pedro');
console.log(arrayTeste[0]);
//Adiciona um elemento no fim da array
arrayTeste.push('Gustavo');
console.log(arrayTeste[4]);
//Remove o primeiro elemento da array
arrayTeste.shift();
console.log(arrayTeste);
//Remove o ultimo elemento da array
arrayTeste.pop();
console.log(arrayTeste)
//


// busca pelo indice
console.log(arrayTeste[3]);

// busca pelo elemento
console.log(arrayTeste.indexOf('Mathias'));

//Junta as Arrays
var array1 = ['Henrique', 'Mathias', 'Eduardo'];
var array2 = ['Maria', 'Willan', 'Igor'];
var array3 = array1.concat(array2);

console.log(array3);

//JSON
var teste1 = {
    nome : 'Pedro',
    idade : '25',
    email : 'pedrinhodabarra@teste.com'
}
console.log(teste1);
console.log(JSON.stringify(teste1));