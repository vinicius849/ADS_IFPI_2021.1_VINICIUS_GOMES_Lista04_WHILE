const input = require('prompt-sync')()

function main(){
    console.log('CANAIS TELEVISIVOS/n - 2/n - 4/n - 5/n - 7/n - 10/n - 0(Para encerrar a entrevista)!')
}

    let canal = 1;
    let audiencia = 0;
    let canal_2 = 0;
    let canal_4 = 0;
    let canal_5 = 0;
    let canal_7 = 0;
    let canal_10 = 0;

    while(canal !== 0){
        canal = Number(input('Infortme aqui o(s) canal(is) que você(s) está(ão) assistindo: '));
        audiencia = Number(input('Informe aqui quantas pessoas estão assistindo: '));

        if (canal === 2){
            canal_2 = canal_2 + audiencia;
        }else if (canal === 4){
            canal_4 = canal_4 + audiencia
        }else if (canal === 5){
            canal_5 = canal_5 + audiencia
        }else if (canal === 7){
            canal_7 = canal_7 + audiencia
        }else if (canal === 10){
            canal_10 = canal_10 + audiencia
        }else{
            console.log('Canal informado inválido!')
        }

    }
    
    let total = canal_2 + canal_4 + canal_5 + canal_7 + canal_10;

    console.log(`=====================\nAudiencia:n\Canal 2 - ${canal_2}\nCanal 4 - ${canal_4}\nCanal 5 - ${canal_5}\nCanal 7 - ${canal_7}\nCanal10 - ${canal_10}`);
    console.log(`=====================\nPorcentagem:nCanal 2 - ${canal_2 / total * 100}%\nCanal 4 - ${canal_4 / total * 100}%\nCanal 5 - ${canal_5 / total * 100}%\nCanal 7 - ${canal_7 / total * 100}%\nCanal 10 - ${canal_10 / total * 100}%`);

main()

