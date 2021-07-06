const input = require('prompt-sync')()

function main(){
    let cidade_a = 200000;
    let cidade_b = 800000;
    let i = 0;

    while (cidade_a <= cidade_b){
        cidade_a = (cidade_a + (cidade_a * 0.035));
        cidade_b = (cidade_b + (cidade_b * 0.0135));
        i++;
    }
    console.log(`A Cidade A ultrapasará a Cidade B em ${i} anos!`)

}

main()