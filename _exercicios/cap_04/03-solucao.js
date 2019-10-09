/*
## Exercício 3 - S-o-l-e-t-r-a-n-d-o
Utilizando os aprendizados deste capítulo, implemente a função
`soletraPalavra` que recebe como único parâmetro uma String
e então exibe cada letra da String em uma linha do console.
*/

console.log();
console.log("========================= Ex3 ============================");


const a3 = 'André';

function soletra(palavra) {
    var iterador = palavra[Symbol.iterator]();
    do {
        var letra = iterador.next();
        if (letra.value !== undefined) {
            console.log(letra.value);
        }
    } while (!letra.done);
}

soletra(a3);
