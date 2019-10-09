/*
## Exercício 4 - Eu prefiro o meu
Crie o método 'criaIterador' que recebe como parâmetro uma lista
e então o devolve um objeto que possui o mesmo comportamento de um iterador,
ou seja, que possui o método `next` que toda vez que invocado,
retorna um objeto com as propriedades: `value` e `done`.

* Exemplo: criaIterador([1,2]).next() → { value: 1, done: false }
*/


//Esta é a solução do autor, não consegui fazer porque não tinha muito conhecimento
// de objetos e métodos.
function criaIterador(array) {
    var proximoIndice = 0;

    return {
        next: function () {
            if (proximoIndice < array.length) {
                return { value: array[proximoIndice++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };

}

var a = [1, 2, 3, 4];

b = criaIterador(a);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);