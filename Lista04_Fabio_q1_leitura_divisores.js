const input = require('prompt-sync')()

function main(){
    // Entrada da questão
    let i = 0;
    quantidade_de_numeros = Number(input('Quantos números deseja conferir: '));
    let numeros = new Array(quantidade_de_numeros)

    while (i < quantidade_de_numeros){
        numeros[1] = Number(input('Digite aqui o número: '))
        i++
    }
    // Obs:. Números [1] armazena os números
    // Quantidade de números armazena as voltas no loop
    i = 0;

    // Processamento
    while(i < quantidade_de_numeros){
        divisor(numeros[1])
        i++
    }
}

function divisor(divisor){
    let continuacao = 0
    console.log('---------------------------------------')
    while (continuacao <= divisor){
    }
    if(divisor % continuacao === 0){
    }
   // Fim da questão
    console.log(divisor, 'divisível por', continuacao)
    continuacao++

}

main()

