/*
# Exercícios
Nestes exercícios iremos exercitar como fazer laços de repetição
utilizando a estrutura `for...of`
*/

/*
## Exercício 1 - Contando o faturamento
Escreva uma função chamada `somaFaturamento` que recebe uma lista
de números inteiros e devolve a soma destes valores.

* Exemplo: somaFaturamento([1,2,3,4]) → 10
*/

const faturamento = [100, 400, 200, 600, 150, 150];

function somaFaturamento(faturas){
    let total = 0;
    for (let fat of faturas) {
        total += fat; 
    }
    return total;
}

var a = somaFaturamento(faturamento);

console.log("O total do faturamento foi de:", a);