/*
Livro "ECMAScript 6 - Entre de cabeça no futuro do JavaScript"
Autor: Diego Martins de Pinho.
Enquanto leio o livro,  estou digitando e testando os código contidos
nele.
=====================================================================
========================== CAPITULO 5° ==============================
=====================================================================
*/

//=================== Iteração com "for...of"========================

//For...of pode ser utilizado apenas em objetos que são iteráveis.

// Exemplo de 'for...of' em uma string.
console.log("======== Exemplo de 'for...of' em uma string.==========");
var a = 'andre';
for (let b of a) {
    console.log(b)
};

console.log("------------------------------------------------------");

// Exemplo de 'for...of' em um array de n° inteiros.
console.log("");
console.log("======== Exemplo de 'for...of' em um array ============");
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numero of numeros) {
    console.log(numero);
};

console.log("------------------------------------------------------");

// Uso do 'for...in' quando o objeto não é iterável.
console.log("");
console.log("==== Exemplo do uso do 'for...in' para um objeto não iterável ===");
var pessoa = {
    nome: 'Andre',
    idade: 47,
    peso: 85,
    cidade: 'Osasco'
};
/*
for (let dado of pessoa){ // com 'of' vai gerar o erro: "TypeError: pessoa is not iterable"
    console.log(dado)
};*/
// Para iterar este objeto, é preciso usar o 'for...in'
for (let dado in pessoa){ // usando o 'in' ao invés do 'of'
    console.log(pessoa[dado] );
};

console.log("------------------------------------------------------");

// Uso do 'break' dentro do laço 'for...of'
console.log("");
console.log("==== Exemplo do uso do 'break' dentro um laço ===");
var numerosA = [1, 2, 3, 4, 5, 6];
for (let num of numerosA) {
    if ( num > 3 ){
        console.log("N° 3 encontrado, o laço foi encerrado!");
        break;// se houver um n° maior do que 3, o laça para de ser executado.
    }
    console.log(num);
};

console.log("------------------------------------------------------");

// Uso do 'continue' dentro do laço 'for...of'
console.log("");
console.log("==== Exemplo do uso do 'continue' dentro de um laço ===");
var numerosB = [1, 2, 3, 4, 5, 6];
for (let numB of numerosB) {
    if (numB === 2 ){
        console.log("N° 2 encontrado, esta iteração para aqui, mas o laço continua...");
        continue;
        // se houver um n° === 2, essa interação será interrompida, mas o laço continua.
    }
    console.log(numB);
};

console.log("------------------------------------------------------");

// Observação feita por mim:
// No array abaixo, se usar 'of' para iterar cada valor, será retornado
// os valores como esperado. Veja:
console.log("");
console.log("==== 'of' vs 'in' em um objetor iterável ===");
var nomes = ['Andre Rigotto', 'Neuza Meira', 'Rodrigo Bedutti', 'Débora Vidal'];

for( z of nomes ) {
    console.log(z);
}

// se simplesmente trocar 'of' por 'in' será retornado os index...
console.log("");
console.log("==== 'of' vs 'in' em um objetor iterável ===");
for( z in nomes ) {
    console.log(z);
}

//...para exibir o valor, é preciso apenas colocar 'array[index]'. 
console.log("");
console.log("==== 'of' vs 'in' em um objetor iterável ===");
for( z in nomes ) {
    console.log(nomes[z]);
}
