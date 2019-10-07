/*
## Exercício 12 - Limpando o estoque
Crie um método chamado `existeProdutosDatados` que recebe um parâmetro chamado `produtos` que é um array de `produtos` e identifica se há algum produto que está acima da data de validade. Caso existe, deve voltar `true`, caso contrário, `false`. Cada produto tem as seguintes características:
- nome: String que representa o nome do produto
- preco: Número que representa o preço do produto
- dataValidade: Data de validade do produto

O método também deve aceitar um segundo parâmetro `dataReferencia`. Se passado, o método deve fazer a comparação de validade em relação a ele, caso contrário, utiliza a data da execução como parâmetro.

Tome como exemplo os produtos a seguir:
``` javascript
var produtos = [
    { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
    { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
    { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
]
```

* Exemplo: existeProdutosDatados(produtos, '2017-03-01') → true
* existeProdutosDatados(produtos,'2016-01-01') → false
*/


function existeProdutosVencidos(produto, dataReferencia) {
    function dataFormat(data) {
        dataArray = data.split('/');
        objData = {};
        dataArray.forEach((elem, index) => {
            if (index == 0) objData.dia = elem;
            if (index == 1) objData.mes = elem;
            if (index == 2) objData.ano = elem;
        });
        let strData = new Date(objData.ano + "-" + objData.mes + "-" + objData.dia);
        return strData;
    }
    if (dataReferencia === undefined) { refFormatada = new Date() }
    else { refFormatada = dataFormat(dataReferencia) }

    let vencido = produto.find(elem => {
        let validadeFormatada = dataFormat(elem.dataValidade);
        return validadeFormatada < refFormatada;
    });
    if (vencido !== undefined) { return true } else { return false };
}

var produtos = [
    { nome: 'Cereal', preco: '10', dataValidade: '21/02/2020' },
    { nome: 'Suco de Abacaxi', preco: '12', dataValidade: '05/04/2020' },
    { nome: 'Torta de frango', preco: '25', dataValidade: '01/11/2019' }
];


//Solução do autor. Está bem mais curta, porém com bug. Ele não previu que na data tem que colocar
//antes em ordem o mês e o dia, Date só aceita 'mês/dia/ano' ou ano/mês/dia.
function existeProdutosDatados(produtos, data) {
    var dataReferencia = new Date();
    if (data) dataReferencia = new Date(data);
    return produtos.some(function (produto) {
        return new Date(produto.dataValidade) < dataReferencia;
    });
}

const meu = existeProdutosVencidos(produtos, '10/10/2019'); // meu código
console.log('Meu   =>', meu);
const autor = existeProdutosDatados(produtos, '10/10/2019'); // código do autor com bug de data. 
console.log('Autor =>', autor);
