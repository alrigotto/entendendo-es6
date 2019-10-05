/*
Faça uma função chamada `removeDuplicatas` que recebe um array de números inteiros
e remove todas as suas duplicadas.

Utilize as funções auxiliares: `reduce` e `find`.

* Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]
*/

function removeDuplos(vetor) {
    let novamente = false;
    let vet = [...vetor];
    let red = vet.reduce(function (acc, elem) {
        let duplo = 0;
        vet.find(function (procura) {
            if (elem === procura) {
                duplo++;
                if (duplo > 1) {
                    if (acc.find(x => x === elem) === undefined) { acc.push(elem) }
                }
            }
        });
        // O acc é um vetor com os valoreas que são repetidos.
        return acc;
    }, []);

    // Deletando elementos repetidos.
    red.find(function (y) {
        if (vet.indexOf(y) !== -1) {
            vet.splice(vet.indexOf(y), 1)
        }
    });

    //verificando se ainda existem duplos, pois se tinha tripos ou mais no vetor
    // eles serão apenas reduzidos em 1, caso isso aconteça, será colcoado true
    // na variavel que habilita oa recursividade para filtrar de novo.
    vet.find(z => {
        let t = 0;
        vet.find(w => {
            if (z === w) {
                t++;
                if (t > 1) {
                    novamente = true;
                    return w;
                }
            }
        });
    });
    // certificando a necessidade de recursiveidade apenas retorna se não houver mais duplos
    if (novamente) {
        removeDuplos(vet)
    } else { veto = [...vet] }
    return veto;
}

const original = [-1,-1,0,0,0];
const teste = removeDuplos (original);    // solução minha
const teste = removeDuplicatas (original);  // solução do autor
console.log("===========================================");
console.log("Original:", original);
console.log("Resultado sem duplos:", teste);

/*----------------------------------------------------------
Solução do autor do livro:
------------------------------------------------------------*/
function removeDuplicatas(numeros) {
    /*
    A solução do autor é bastante curta e inteligente.
    Ao contrario do que eu fiz, ele usa o acumulador do reduce para ir criando a matriz
    de retorno. Eu usei o acumulador pra mostrar os valores repetidos, me obrigando a 
    tratar eles e retornar a matriz depois, e em casos de triplos ou mais eu tive que
    usar a complexa recursividade.
    */
    return numeros.reduce(function (anterior, valor) {
        var achouDuplicata = anterior.find(function (valor2) {
            return valor === valor2;
        });
        /*
        if (!achouDuplicata) {  // essa era a linha original proposta pelo autor
        eu acrescentei (achouDuplicata !== 0) porque o algoritimo não estava
        tratando valor 0 (zero).
        */
        if ((!achouDuplicata) && (achouDuplicata !== 0)) {
            anterior.push(valor);
        }

        return anterior;
    }, []);
}











/*
function removeDuplos(vetor) {
    let novamente = false;
    let vet = [...vetor];
    let red = vet.reduce(function(acc, elem) {
        console.log("analisando -->", elem);
        let duplo = 0;
        vet.find(function(procura) {
            console.log(procura);
            if (elem === procura) {
                duplo++;
                if (duplo > 1) {
                    console.log("DUPLO", duplo);
                    if (acc.find(x => x === elem) === undefined) { acc.push(elem) }
                }
            }
        });
        console.log("Repetidos -->", acc);
        console.log("--------------------");
        return acc;
    }, []);


    // Deletando elementos repetidos.
    red.find(function(y) {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!! deletando...");
        console.log("vet: ", vet);
        console.log("red: ", red);
        if (vet.indexOf(y) !== -1) {
            vet.splice(vet.indexOf(y), 1)
        }
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!! Já deletou!");
    });
    console.log("vet na saida do delete: ", vet);
    console.log("red na saida do delete: ", red);

    vet.find(z => {
        let t = 0;
        vet.find(w => {
            if (z === w) {
                t++;
                if (t > 1) {
                    novamente = true;
                    // removeDuplos(vet);
                    return w;
                }
                // console.log("under investigation",vet);
            }
            // console.log("under investigation",vet);
        });
        // console.log("under investigation",vet);
    });
    console.log("under investigation", vet);
    if (novamente) {
        console.log("########################### Recursivo");
        console.log("vet", vet);
        removeDuplos(vet);
    } else {
        veto = [...vet];

        console.log("under investigation veto", veto);
        console.log('sem repeteco');

    }
    return veto;
}


const original = [1, 1, 2, 3, 3, 3, 4, 5, 6, 7, 6, 5, 8, 9, 3, 3, 3, 0, 0, 9];
const teste = removeDuplos(original);
console.log("===========================================");
console.log("Original:", original);
console.log("Resultado sem duplos:", teste);
*/