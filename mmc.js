const prompt = require('prompt-sync')()

function main(){
    const num_a = Number(prompt('Número A: '));
    const num_b = Number(prompt('Número B: '));

    let maior = num_a > num_b ? num_a : num_b // Chama-se isto aqui de equação ternária em JS.
    let mmc = maior

    // let numero = 1 Leva-se em consideração let para variáveis utlizando condicionais

    while (!(mmc % num_a === 0 && mmc % num_b === 0)){
        console.log('.')
        mmc = mmc + maior
    }

    console.log('MMC', mmc)

}

main()
