/*
Livro "ECMAScript 6 - Entre de cabeça no futuro do JavaScript"
Autor: Diego Martins de Pinho.
Enquanto leio o livro, estou digitando e testando os código contidos nele.
Para fazer as explicações aparecerem no terminal, eu resolvi usar o 'echo' ao invés de usar linhas comentadas para explicar os códigos. 
*/




//----------------------------- forEach ----------------------------
console.log("######################### forEach #########################")

console.log("Iteração padrão comum usando 'for':");
var frutas = ['abacaxi', 'maça', 'uva'];
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
console.log();


console.log("Iteração com 'forEach' e função de 'callback' que pode ser anonima ou não:");
var a = function(nome) { console.log(nome) }
var nomes = ['maria', 'josé', 'joão'];
nomes.forEach(a);

console.log();
console.log("Ou usando a função anonima diretamente dentro do 'forEach':");
var nomes = ['maria', 'josé', 'joão'];
nomes.forEach(function(nome) { console.log(nome) });

console.log();

console.log("Uma vez invocado, o 'forEach' ignora os valores adicionados, retirados ou modificados no vetor durante a iteração corrente. Durante a execução da 'callback' é inserido 'RedeTV', ela vai para a lista, mas é ignorada durante esta iteração:");
var canais = ["Globo", "Record", "SBT"];
canais.forEach(function n(canal) {
    canais.push("RedeTV"); //Este item será ignorado pelo forEach
    console.log(canal);
})
console.log();
console.log("Apesar de não ter sido iterado, o elemento 'RedeTV' foi adicionado ao vetor")
console.log(canais);

console.log();

//----------------------------- map ----------------------------
console.log("######################### map #########################");

console.log("Dobrando os valores de um vetor usando o padrão 'for':");
var numeros = [1, 2, 3];
var dobro = [];
for (var i = 0; i < numeros.length; i++) {
    dobro.push(numeros[i] * 2);
}
console.log(numeros);
console.log(dobro);

console.log();
console.log("Usando o 'map' para realizar o mesmo objetivo:");

var numeros = [1, 2, 3];
var dobro = numeros.map(function(num) {
    return num * 2;
});
console.log(dobro)
console.log("(*)Lembrando que, assim como o 'forEach', o 'map' irá ignorar valores acrescentados, removidos ou modificados no vetor durante a execução da iteração corrente. 2- A função de 'callback' pode ser anonima ou não e pode ser declarada fora do 'map'.")

console.log();


//----------------------------- filter ----------------------------
console.log("######################### filter #########################");

console.log("Verificando na lista abaixo os maiores de idade usando um método 'for':");
var alunos = [
    { nome: 'João', idade: 15 },
    { nome: 'José', idade: 18 },
    { nome: 'Maria', idade: 20 }
];
var alunosDeMaior = [];
for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].idade >= 18) {
        alunosDeMaior.push(alunos[i]);
    }
}
console.log(alunosDeMaior);

console.log();

console.log("Usando 'filter' para o mesmo resultado, porém com mais clareza:");
var alunos = [
    { nome: 'João', idade: 15 },
    { nome: 'José', idade: 18 },
    { nome: 'Maria', idade: 20 }
];
var alunosDeMaior = alunos.filter(function(aluno) {
    return aluno.idade >= 18;
});
console.log(alunosDeMaior);

console.log();

//----------------------------- find ----------------------------
console.log("######################### find #########################");

console.log("Encontrando o nome 'José' em uma lista usando o padrão 'for':");
var alunos = [
    { nome: 'João' },
    { nome: 'José' },
    { nome: 'Maria' }
];
var aluno;
for (var i = 0; i <= alunos.length; i++) {
    if (alunos[i].nome === 'José') {
        aluno = alunos[i];
        break; // evita percorrer a lista toda quando encontrar o nome.
    }
}
console.log(alunos);
console.log(aluno);
console.log("(*)Lembrando que desta forma somente será retornado a primeira ocorrência da lista, se houvesse outra ela seria ignorada.");
console.log();


console.log("Usando 'find' para encontrar o mesmo nome:");
var alunos = [
    { nome: 'João' },
    { nome: 'José' },
    { nome: 'Maria' }
];
var aluno = alunos.find(function(aluno) {
    return aluno.nome = "José";
})
console.log(alunos);
console.log(aluno);
console.log("(*)O 'find' se comporta da mesma forma acima, ou seja, somente será retornado a primeira ocorrência da lista.");

/*
A partir daqui somente irei fazer o código do elemento ou método que estou
estudando,não vou mais fazer o equivalente em 'for'.
*/

//----------------------------- every ----------------------------
console.log();
console.log("######################### every #########################");

console.log("Aqui o objetivo é iterar completamente um array com uma determinada condição retornado 'true' ou 'false'.");
console.log("O 'every' realiza esta função, aqui ele irá retornar 'true' se todos os alunos forem maior de idade:");
var alunos = [
    { nome: 'João', idade: 19 },
    { nome: 'José', idade: 20 },
    { nome: 'Maria', idade: 24 }
];

var todosAlunosDeMaior = alunos.every(function(aluno){
    return aluno.idade > 18;
});
console.log(`Resposta: ${todosAlunosDeMaior}`);

//----------------------------- some ----------------------------
console.log();
console.log("######################### some #########################");

console.log("Aqui o objetivo é iterar completamente um array até encontrar uma condição válida e retornar 'true' ou 'false' caso a condição não seja satifeita.");
console.log("O 'some' realiza esta função, aqui ele irá retornar 'true' se encontrar pelo menos uma condição:");

var pesoDasMalas = [12, 32, 21, 29];
var temMalasAcimaDoPeso = pesoDasMalas.some(function(peso){
    return peso > 30;
});
console.log(`Tem peso maior que 30kg: ${temMalasAcimaDoPeso}`);

//----------------------------- reduce ----------------------------
console.log();
console.log("######################### reduce #########################");

console.log("O 'reduce' faz uma determinada operação com cada elemento iterado no array. Essa operação é determinada pela função de 'callback'. Mas o 'reduce' ainda precisa de um segundo parâmetro que é o valor incial.");

console.log("Neste exemplo será realizada a soma de todos os elementos de um array:");

var numeros = [1, 2, 3, 4, 5];

var soma = numeros.reduce(function(som, num) {
    return som + num;
}, 0);

console.log(soma);

console.log();
console.log("Neste exemplo será retornado os nomes de todos os alunos ignorando suas idades:");

var alunos = [
    { nome: 'João', idade: 10 },
    { nome: 'José', idade: 20 },
    { nome: 'Marcos', idade: 30 }
];

var nomes = alunos.reduce(function(nomesArray, aluno) {
    nomesArray.push(aluno.nome);
    return nomesArray;
}, []);

console.log(nomes);
