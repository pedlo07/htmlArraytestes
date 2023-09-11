var arrayTeste = ['henrique', 'Mathias', 'Eduardo'];

console.log(arrayTeste[0]);
arrayTeste.unshift('Pedro');
console.log(arrayTeste[0]);
arrayTeste.push('Gustavo');
console.log(arrayTeste[4]);
arrayTeste.shift();
console.log(arrayTeste);

// busca pelo indice
console.log(arrayTeste[3]);

// busca pelo elemento
console.log(arrayTeste.indexOf('Mathias'));

var array1 = ['Henrique', 'Mathias', 'Eduardo'];
var array2 = ['Maria', 'Willan', 'Igor'];
var array3 = array1.concat(array2);

console.log(array3);