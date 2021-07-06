const prompt = require('prompt-sync')()

function multiplicacao(){
    const num_1 = Number(prompt('Digite o número 1: '));
    const num_2 = Number(prompt('Digite o número 2: '));

    let numero = num_1 > num_2 ? num_1 : num_2 // É o que chamamos de Equação Ternária na Computação (termo novo).

    // let numero = 1 Leva-se em consideração let para variáveis utlizando condicionais
    if (num_1 > num_2){
        numero = num_1
    }else{
        numero = num_2
    }

    while (!(numero % num_1 === 0 && numero % num_2 === 0)){
        console.log('.')
        numero++
    }
    console.log('MMC', numero)

}

multiplicacao()