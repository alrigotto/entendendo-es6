/*
# Exercícios
Nestes exercícios iremos exercitar como fazer laços de repetição utilizando a estrutura `for...of`
*/

/*
## Exercício 5 - Não vá por ali!
Implemente o método 'percorreRuas' que recebe dois parâmetros:
- ruas: Lista de strings que presentam as ruas que serão percorridas (ex: 'Rua 1')
- ruaPerigosa: String que representa o nome da rua que deve ser evitada

Faça com que o método percorra cada uma das ruas exibindo no console, menos para a `ruaPerigosa`.
Utilize o `for...of` e o `continue` para fazer esta lógica.
*/

const listaRuas = ['Rua 1' , 'Rua 2', 'Rua 3', 'Rua 4', 'Rua 5', 'Rua 6'];

function evitaRua(ruas, desvia) {
    for (const rua of ruas) {
        if(rua === desvia) {
            console.log("A", rua , "foi evitada!");
            continue;
        }
        console.log(rua)
    }
}

evitaRua(listaRuas, 'Rua 5')