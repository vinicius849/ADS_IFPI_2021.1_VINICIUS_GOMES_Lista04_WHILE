const input = require('prompt-sync')()

function main(){
    let distancia = Number(input('Informe a distância percorrida em km: '));
    let consumo = Number(input('Informe a quantidade de combustível consumida em L: '));

    while(consumo > 50){
        console.log('Você não pode consumir mais litros de combustível do que tem no tanque (50 L).')
    }
    if (distancia >= 600){
        console.log('Você já chegou ao seu destino!')
    }else if (consumo === 50){
        console.log('Combustível já acabou antes de chegar ao seu destino.')
    }else{
        console.log('Você não chegou ao seu destino e ainda não gastou seu combustível!')
    }
    console.log(`Consumo em Km/L: ${distancia/consumo}`);

}

main()