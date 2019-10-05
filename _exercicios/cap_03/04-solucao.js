
/*
## Exercício 4 - Equilibrio de parênteses
Utilizando a função auxiliar `reduce`, escreva uma função chamada `validaParenteses` que
avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses
esquerdo “(“ é necessário ter um parênteses direito “)” correspondente.
A função deve aceitar uma `string` e retornar um valor booleano (true ou false).

* Exemplo: validaParenteses(')((()()())))'); →  false
* Exemplo: "()()()" → true
* Exemplo: ")(" → false
*/

function validaParenteses(str) {
    /*
    "Array.from(str)" é para tranformar a string em um array,
    porque uma string não aceita 'reduce' diretamente.
    Poderia ser usado também: str.split("")
     */
    let strArray = Array.from(str);// ou: "let strArray = str.split("");"
    //Usa o 'reduce' para varrer a array. 
    let res = strArray.reduce(function (acumulador, elemento) {
        /*
        Qualquer valor que não seja false será avaliado.
        Quando for false é porque foi atingido um valor negativo
        (veja o ultimo 'if'). Portanto nenhum valor será mais avaliado.
        */
        if (acumulador !== false) {
            if (elemento === "(") {
                acumulador += 1; // soma 1 quando for abre parenteses.
            }
            if (elemento === ")") {
                acumulador += -1; // subtrai 1 quando for fecha parenteses.
            }
            if (acumulador < 0) {
                /*
                Se o valor chegar a ser negativo, vai direto pra
                false, porque não tem como terminar corretamente o
                fechamento de parenteses. Ex: "())((("
                */
                acumulador = false;
            }
        }
        return acumulador;

    }, 0);
    // Tratamento do retorno do 'acumulador'
    if (res === 0) {
        //Os parenteses estão equilibrados, ou seja, 'true'
        res = true;
    } else if ((res > 0) || (res < 0)) {
        // Os parenteses estão desequilibrados, ou seja, 'false'.
        res = false;
    }
    /*
    Se passou pelos dois 'if' acima, é porque o acumulador já veio
    com o valor 'false'.
    */
    return res;
}

//Strings para testes:
const f1 = "x)c(e)dc(d))"
const f2 = "x()v()e09()"
const f3 = "g()u(()))("
const f4 = ")(yy(()(uu)()i)))"
const f5 = "t()r(r)(t)"
const f6 = ")))((("
const f7 = ""
const f8 = "   "
const f9 = ""

const teste = validaParenteses(f9);
if (teste) {
    console.log(`A equação está com os parênteses corretos!`);
} else {
    console.log("Parênteses errados, verifique!");
}





