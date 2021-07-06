const prompt = require('prompt-sync')()

function main(){
    const numero = Number(input('Digite o número de funcionários de uma empresa: '))
    const reajuste = reajuste_salarial(numero)
    soma_atual = reajuste[0]
    soma_novo = reajuste[1]

    diferenca_salarial = soma_novo - soma_atual

    console.log(`A soma do salário atual ${soma_atual} é`)
    console.log(`Soma do novo salário ${soma_novo} é`)
    console.log(`A diferença entre os salários é ${diferenca_salarial}`)
}

main()

function reajuste_salarial(numero){
    soma_salario_atual = 0
    soma_salario_novo = 0
}
    while (numero > 0){
        salario = Number(prompt('Digite o salário dos funcionários: '))
        soma_salario_atual += salario
    if ((numero > 0 && numero < 2999)){
        salario *= 1.25
        soma_salario_novo += salario
    }else if ((numero >= 2999 && numero < 5999)){
        salario *= 1.20
        soma_salario_novo += salario
    }else if ((numero >= 5999 && numero < 9999.99)){
        salario *= 1.15
        soma_salario_novo += salario
    }else if (numero >= 10000.00){
        salario *= 1.10
        soma_salario_novo += salario
    }
    numero -= 1

return soma_salario_novo, soma_salario_atual

reajuste_salarial()