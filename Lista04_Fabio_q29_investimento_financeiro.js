const input = require('prompt-sync')()

function main(){
    let investimento = Number(input('Informe quantoi será investido no mês: '));
    let taxajm = Number(input('Informe qual será a taxa e juros mensal(%): '));
}

main()

    investimento(investimento, taxajm)

function investimento(i, t){
    let contador = "s";
    let jc = 0;

    while(contador === "s"){
        jc = 1 * Math.pow((1 + t), 12)
        console.log(`Investimento após 1 ano: ${i * 12 + jc}`);
        contador = String(input('Deseja processar mais um ano? (S, N): '));
    }
}