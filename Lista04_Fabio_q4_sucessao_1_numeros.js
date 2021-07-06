const prompt = require('prompt-sync')()

function main(){
    const numero = Number(prompt('Digite aqui um número: '));
    let resultado = numero / 2
    let contador = 1

    while(resultado >= 1){
        resultado = resultado / 2
        contador++


    console.log('O último resultado será: ', resultado)
        console.log('A qtd de divisões será: ', contador)
    }

}

main()
