const input = require('prompt-sync')()

function main(){
    let num_1 = Number(input('Informe o primeiro número: '));
    let num_2 = Number(input('Informe o segundo número: '));

    console.log(`A multiplicação dos números informados é ${mult(num_1, num_2)}`);

}

main()

function mult(n1, n2){
    let i = 1;
    let aux = n1;
    
    while(i !== n2){
        aux = aux + n1;
        i++
    }
    return aux;
}

mult()