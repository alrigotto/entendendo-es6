/*
Exercício 7 - Dados precisos
Crie uma função buscar que recebe três parâmetros:

propriedade: Nome da propriedade no objeto
valor: Valor da propriedade no objeto
lista: Lista de objetos onde a busca deve ser executada
Dado estes parâmetros, a função deve buscar na lista e retornar o registro que possui a propriedade com o valor especificado.

Utilize o método find.

var lista = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
]
Exemplo: buscar('nome', 'Tânia', lista) → { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 }
*/

var testeA = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
]
var testeB = [
    { nome: 'Neuza', sobrenome: 'Meira', idade: 46 },
    { nome: 'Andre', sobrenome: 'Rigotto', idade: 47 },
    { nome: 'Debora', sobrenome: 'Vidal', idade: 20 },
    { nome: 'Rodrigo', sobrenome: 'Silva', idade: 32 }
]

function busca(prop, valorProp, listaAlvo) {
    let z = listaAlvo.find(function(elem) {
        if (elem[prop] === valorProp) { return elem }
    });
    return z;
}

a = busca('nome', 'Emilly', testeA);
b = busca('idade', 20, testeB);
c = busca('sobrenome', 'Silva', testeB);
console.log("======================================================");
console.log("Buscando por: (nome, Emilly, testeA)");
console.log(a);
console.log("======================================================");
console.log("Buscando por: (idade, 20, testeB)");
console.log(b);
console.log("======================================================");
console.log("Buscando por: (sobrenome, Silva, testeB)");
console.log(c);
console.log("======================================================");