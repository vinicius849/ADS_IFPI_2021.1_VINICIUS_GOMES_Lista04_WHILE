const input = require('prompt-sync')()

function main(){
    let aleatorio = numeroaleatorio(1,100);
    let palpite = 0;
    let tentativas = 0;
}

main()

    while(palpite !== aleatorio){
        palpite = Number(input('Informe seu palpite sobre o número gerado aleatoriamente: '));
        tentanto(palpite, aleatorio);
        tentativas++;
    }
    console.log(`Total de tentativas: ${tentativas}`);

function numeroaleatorio(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function tentando(palpite, aleatorio){
    if (palpite < aleatorio){
        console.log('Maior')
    }else if (palpite > aleatorio){
        console.log('Menor')
    }else{
        console.log('Engano de tentativa! Por favor, tente novamente!')
    }
}
