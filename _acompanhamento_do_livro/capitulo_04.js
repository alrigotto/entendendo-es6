/*
Livro "ECMAScript 6 - Entre de cabeça no futuro do JavaScript"
Autor: Diego Martins de Pinho.
Enquanto leio o livro,  estou digitando e testando os código contidos nele.
Para fazer as explicações aparecerem no terminal, eu resolvi usar o 'echo'
ao invés de usar linhas comentadas para explicar os códigos.
============================================================
===================== CAPITULO 4° ==========================
============================================================
*/

//================Iteradores e Iteráveis ===================

//array:
var nomes = ['Andre Rigotto', 'Neuza Meira', 'Rodrigo Bedutti', 'Débora Vidal'];

// Objeto iterador do array nomes
var iteradorNomes = nomes[Symbol.iterator]();

/* A cada vez que o método next do iterador é chamado ele vai para o próximo
elemento do array até a propriedade 'value' ser undefined e 'done' ser true.
*/
console.log(iteradorNomes.next()); // { value: 'Andre Rigotto', done: false }
console.log(iteradorNomes.next()); // { value: 'Neuza Meira', done: false }
console.log(iteradorNomes.next()); // { value: 'Rodrigo Bedutti', done: false }
console.log(iteradorNomes.next()); // { value: 'Débora Vidal', done: false }
console.log(iteradorNomes.next()); // { value: undefined, done: true }