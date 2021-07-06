const prompt = require('prompt-sync')()

function main(){
    igual_primeiro = Number(prompt('Digite aqui um número: '))
    return igual_primeiro()

}

main()

function loop_primeiro(numero){
    const valor = 0;
    while(valor !== numero){
    }if(valor !== numero){
        console.log(`${valor} é diferente do número desejado.`)
    }else{
        console.log(`${valor} encontrado é igual ao número inicial.`)
    }

}

loop_primeiro()
