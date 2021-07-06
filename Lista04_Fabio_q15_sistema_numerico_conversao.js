const prompt = require('prompt-sync')()

function main(){
    const numero = Number(prompt('Digite um número na base decimal: '))
    valida_base_numerica(numero)
}

main()

function valida_base_numerica(n){
    const op = Number(prompt('Digite a base para converter(2-BI) para (16-HEX): '))
    while ((op !== 0 && op !== 16)){
    op = Number(prompt('Digite a base para converter(2-BI) para (16-HEX): '))
}
    if (op === 2){
        console.log(binario(n))
    }else{
        console.log(hexadecimal(n))
    }

function binario(n){
    binario = ""
    while (n >= 1){
    }if (n % 2 === 0){
        console.log(novo ='0')
    }else{
        console.log(novo = '1')
    }
    binario = novo + binario
    n /= 2

}
    
    console.log(binario)

function hexadecimal(n){
    base = ''
    while (n >= 1){
        hexa = n % 16;
    }if (hexa === 10){;
        novo = 'A'
    }else if (hexa === 11){;
        novo = 'B'
    }else if (hexa === 12){;
        novo === 'C'
    }else if(hexa === 13){;
        novo === 'D'
    }else if(hexa === 14){;
        novo === 'E'
    }else if (hexa === 15){;
        novo === 'F'
    }else{
        novo === str(hexa)
    
    base = novo + base
    n /= 16

    console.log(base)

}

hexadecimal()