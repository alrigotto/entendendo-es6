/*
# Exercícios

Nestes exercícios iremos exercitar como fazer laços de repetição utilizando a estrutura `for...of`
*/

/*
## Exercício 2 - Por quê não funciona?
Um jovem programador tentou utilizar o laço de repetição `for...of` no objeto `Casa`
na esperança de que o laço passasse por todas as propriedades deste objeto.
No entanto, ele só recebeu o erro: `TypeError: Casa[Symbol.iterator] is not a function`.
Por que não está funcionando?
*/

//Por que não está funcionando?

var Casa = {
  metrosQuadrados: 4000,
  altura: 3000,
  nQuartos: 4,
  nBanheiros: 2
}

// Este foi o código que ele tentou executar:
/*
for(var atributo of Casa) {
  console.log(atributo);
}
*/

// ==> Minha resposta, porque 'Casa' não é um objeto iterável,
//ele teria que usar 'in' ao invés de 'of'
// Veja abaixo a solução:
for (var atributo in Casa) {
  console.log("Assim ele consegue somente a propriedade:", atributo);
  console.log("E assim ele consegue somente os valores:", Casa[atributo]);
  console.log("Casa contém =>", Casa[atributo], atributo);
}

