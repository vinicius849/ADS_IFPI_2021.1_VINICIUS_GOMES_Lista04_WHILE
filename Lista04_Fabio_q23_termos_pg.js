const input = require('prompt-sync')()

function main(){
    let razao = Number(input('Informe a razão de uma PG: '));
    let a1 = Number(input('Informe o primeiro termo de uma PG: '));
    let n = Number(input('Informe o A(n): '));

    pg(razao, a1, n){
    }

function pg(r, a1, n){
    let i = a1;
    let termospg = 0;

    while (i <= n){
        termospg = a1 * Math.pow(r, i - 1);
        console.log(`Termo(${i}): ${termospg}`);
        i++;
    }
}

main()