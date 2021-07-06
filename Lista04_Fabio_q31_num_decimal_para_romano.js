const input = require('prompt-sync')()

function main(){
    let numero = Number(input('Informe aqui um valor decimal: '))
}

    while (numero >= 1000 || numero < 0){
        console.log('O número deve ter até 3 algarismos e deve ser maior do que zero.');
        numero = Number(input('Informe um valor em decimal: '));
    }

    romano(numero)

function romano(num){
    let r = "";
    let i = 0;
    let uni = num % 10;
    let dez = ((num - num % 10) % 100 / 10);
    let cen = ((num - num % 100)) / 100;

    let unir = ['','I','II','III','IV','V','VI','VII','VIII','XI'];
    let dezr = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    let cenr = ['', 'C', 'CC', 'CCC','CD', 'D', 'DC','DCC','DCCC','CM'];

    while(i <= uni){
        if (i === uni){
        r = unir[i] + r;
        }
        i++
    }

    i = 0;

    while(i <= dez){
        if (i === dez){
        r = dezr[i] + r;
        }
        i++
    }

    i = 0;

    while(i <= cen){
        if (i === cen){
        r = cenr[i] + r;
        }
        i++
    }

    console.log(r);

}

main()


