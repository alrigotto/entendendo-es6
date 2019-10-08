/*
Exercício 1 - Você está muito longe
Implemente uma função chamada calculaDistancia que recebe uma lista de objetos que
representam ruas e faça a soma de seus tamanhos.
Cada objeto rua da lista possui as seguintes propriedades:

nome: String que representa o nome da rua
tamanho: Número inteiro que representa a comprimento da rua em metros
Utilize somente os conceitos que foram apresentados neste capítulo para iterar as ruas.
Assuma que sempre haverá pelo menos uma rua no array.

Tome como exemplo, a entrada abaixo.

var ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
];
Exemplo: calculaDistancia(ruas) → 7300
*/

var r = [
    { nome: 'Rua 1', tamanho: 2560 },
    { nome: 'Rua 2', tamanho: 3400 },
    { nome: 'Rua 3', tamanho: 1400 }
];

// minha solução ficou parecida com a do autor, mas eu acabei usando um if desnecessário. 
function calculaDistancia(ruas) {
    var iterador = ruas[Symbol.iterator]();
    var distanciaTotal = 0;
    do {
        var objRua = iterador.next();
        // não precisava usar esse if, era só colocar o instanciamento de 'objRua'
        //depois de somar a distância, mas funciona mesmo assim.
        if (!objRua.done) distanciaTotal += objRua.value.tamanho; 
    } while (!objRua.done);
    return distanciaTotal;
}

a = calculaDistancia(r);


console.log("A distância é de:", a);
