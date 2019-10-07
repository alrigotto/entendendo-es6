/*
## Exercício 3 - NÃO ESTOU BRAVO
Escreva o método `caps` que recebe um array de strings e retorna um outro array com todas as strings do array original em CAIXA ALTA.

* Exemplo: caps(['oi', 'tudo', 'bem?']) → ['OI', 'TUDO', 'BEM?']
*/

a = ['andre', 'luiz', 'rigotto', "feliz"];

function caps(palavras) {
    return palavras.map(str => str.toUpperCase()); 
}

b = caps(a);

console.log(b);
