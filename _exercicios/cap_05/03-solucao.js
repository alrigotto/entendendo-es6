/*
# Exercícios
Nestes exercícios iremos exercitar como fazer laços de repetição utilizando a estrutura `for...of`
*/
/*
## Exercício 3 - Agora vai funcionar
Resolva o problema do Exercício 2 utilizando a estrutura `for...in`.

*/

//ele teria que usar 'in' ao invés de 'of'
// Veja abaixo a solução:

var Casa = {
    metrosQuadrados: 4000,
    altura: 3000,
    nQuartos: 4,
    nBanheiros: 2
}


for (var atributo in Casa) {
    console.log("Assim ele consegue somente a propriedade:", atributo);
    console.log("E assim ele consegue somente os valores:", Casa[atributo]);
    console.log("Casa contém =>", Casa[atributo], atributo);
}