/*
## Exercício 11 - A pequena ovelha Dolly
Utilizando o método auxiliar `forEach`, crie uma função `clonaObjeto` que recebe como parâmetro um objeto e cria uma cópia exata dela.

* utilize o método `Object.getOwnPropertyNames` para obter as propriedades do objeto

*/


// Solução igual a do autor.
const objeto = { nome: 'Andre', sobrenome: 'Rigotto', idade: 47, peso: 86 }

function clonaObjeto(obj) {
    let matrizObj = Object.getOwnPropertyNames(obj);
    let clone = {};
    matrizObj.forEach(elem => clone[elem] = obj[elem]);
    return clone;
}

const objClonado = clonaObjeto(objeto)

console.log("Original:", objeto);
console.log("Cópia:   ", objClonado);
