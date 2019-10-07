/*
## Exercício 9 - Raízes quadradas
Crie uma função chamada `calculaRaizesQuadradas` que recebe um array de números inteiros positivos e devolve um outro array com as raízes quadradas correspondentes de cada um dos itens.

* para este exercício, assuma que a entrada terá somente números com raiz exata.
* utilize a função Math.sqrt para calcular a raiz quadrada
*/


//A solução ficou igual a do autor.
const vetor = [25, 16, 144, 1024, 9, 81, 49];

function calculaRaizesQuadradas(matriz){
    return matriz.map(elem => Math.sqrt(elem));    
}

function calculaRaizesQuadradas2(matriz){
    a = [];
    matriz.forEach(elem => {
        a.push(Math.sqrt(elem))
    });
    return a;

}

console.log("As raízes são:", calculaRaizesQuadradas2(vetor));

