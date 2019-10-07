/*
# Exercícios

Nestes exercícios iremos exercitar os métodos auxiliares para array:
* forEach
* map
* filter
* find
* every
* some
* reduce

## Exercício 1 - Par ou ímpar?
Altere o código a seguir para utilizar o método `forEach` de modo que a saída permaneça a mesma.

``` javascript
var numeros = [0,1,2,3,4,5];
for(var i = 0; i<= numeros.length; i++) {
    if(i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
    }
}
// saída:
// 0 é par
// 1 é ímpar
// 2 é par
// 3 é ímpar
// 4 é par
// 5 é ímpar
*/

var numeros = [0, 1, 2, 3, 4, 5];
console.log('Saída:');

var saida = numeros.forEach(function(num){
    if ((num % 2) === 0) {
        console.log(`${num} é par.`);
    } else {
        console.log(`${num} é ímpar.`)
    }
})

