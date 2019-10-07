/*
## Exercício 2 - Quero o dobro
Utilizando o método `map`, escreva o método `dobrar` que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.

* Exemplo: dobrar([1,2,3]) → [2,4,6]

*/

var a = [1, 2, 3, 4];
var b = [5, 25, 23, 59];

// d = teste.map(num => num * 2);


function dobrar(vetor){
    let vetor_dobrado = vetor.map(num => num * 2);
    return vetor_dobrado;
}

console.log(dobrar(a));
console.log(dobrar(b));

