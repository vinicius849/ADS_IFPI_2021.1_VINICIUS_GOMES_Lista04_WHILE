const input = require('prompt-sync')()

function main(){
    let razao = Number(input('Informe aqui a razão de uma PG: '));
    let a1 = Number(input('Informe o primeiro termo de uma PG: '));
    let n = Number(input('Informe aqui o A(n): '));
}

    pa(razao, a1, n){
    }

function pa(r, a1, n){
    let i = a1;
    let termospa = 0;

    while (i <= n){
        termospa = a1 + (i - 1) * r;
        console.log(`Termo(${i}): ${termospa}`)
        i++;
    }
}

main()
