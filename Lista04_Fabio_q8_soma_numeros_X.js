const prompt = require('prompt-sync')()

function main(){
    const numero_x = Number(prompt('Digite aqui um número: '));

    let anterior = numero_x
    let atual = Number(prompt('Digite aqui um outro número: '));
    let soma = anterior + atual

    while (soma !== numero_x){
        const numero = Number(prompt('Digite aqui um número qualquer: '))
        anterior = atual
        atual = numero
        soma = atual + anterior
    }

}

main()

    