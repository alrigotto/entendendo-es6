/*
# Exercícios
Nestes exercícios iremos exercitar como fazer laços de repetição utilizando a estrutura `for...of`
*/

/*
## Exercício 4 - Pare aqui senhor motorista
Implemente o método `percorreRuas` que recebe uma lista de strings que representam nomes de ruas
e um segundo parâmetro que também é um string, mas representa o nome da rua em que deve parar.
Para cada rua percorrida, deve ser apresentada no console, como neste exemplo:

* Exemplo: percorreRuas(['Rua 1, Rua 2', 'Rua 3'], 'Rua 2') → 'Rua 1' , 'Rua 2'

Utilize o laço `for...of` e o `break` para não percorrer mais ruas que o necessário.
*/


const listaRuas = ['Rua 1' , 'Rua 2', 'Rua 3', 'Rua 4', 'Rua 5', 'Rua 6'];

function percorreRuas(ruas, destino) {
    for (const rua of ruas) {
        if(rua === destino) {
            console.log("Chegou ao destino:", rua);
            break;
        }
        console.log(rua)
        
    }

}

percorreRuas(listaRuas, 'Rua 5')