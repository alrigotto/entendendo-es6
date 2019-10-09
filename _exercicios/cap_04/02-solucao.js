/*
## Exercício 2 - Tem alguém ai?

Desenvolva a função 'isListaVazia' que recebe como parâmetro uma lista
de números inteiros qualquer e retorna o valor `true` caso esta lista não
tenha nenhum item e `false` para os demais resultados.
A lógica deve ser feita usando somente a propriedade `done` do objeto que
é obtido ao executar o `next` no iterador do array.
*/

console.log("========================= Ex2 ============================");

const a = [1, 2, 3, 4, 5];
const b = [];
const c = [0];
const d = ['?'];
const e = [''];

function isListaVazia(vetor) {
    //O autor fez tudo em uma única linha: "return lista[Symbol.iterator]().next().done;"
    iterador = vetor[Symbol.iterator]();
    return iterador.next().done;
}


console.log(`A lista [${a}] está vazia? `, isListaVazia(a));
console.log(`A lista [${b}] está vazia? `, isListaVazia(b));
console.log(`A lista [${c}] está vazia? `, isListaVazia(c));
console.log(`A lista [${d}] está vazia? `, isListaVazia(d));
console.log(`A lista [${e}''] está vazia? `, isListaVazia(e));