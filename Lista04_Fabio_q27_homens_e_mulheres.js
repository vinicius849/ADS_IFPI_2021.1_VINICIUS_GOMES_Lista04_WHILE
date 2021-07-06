const input = require('prompt-sync')()

function main(){
    let sexo = 0;
    let idade = 0;
    let estadocivil = 0;
    let i = 0;
    let totalf = 0; // TOTAL DE MULHERES
    let toalm = 0; // TOTAL DE HOMENS
    let somaif = 0; // SOMA DAS IDADES DAS MULHERES
    let somaim = 0; // SOMA DAS IDADES DOS HOMENS
    let soltf = 0; // QUANTIDADE DE MULHERES SOLTEIRAS
    let soltm = 0; // QUANTIDADE DE HOMENS SOLTEIROS
    let divqtd30 = 0; // QUANTIDADE DE MULHERES DIVORCIADAS A PARTIR DOS 30 ANOS
}

main()

    while(i < 100){
        sexo = Number(input('Informe o sexo(1 - Masculino; 2 - Feminino): '));
        idade = Number(input('Informe aqui a idade: '));
        idadecivil = Number(input('Informe seu estado civil(1 - Casado, 2 - Solteiro, 3 - Divorciado, 4 - Viúvo): '));
        if (sexo === 1){
            somaim = somaim + idade;
            totalm++;
        if (estadocivil === 2){
            somaif = somaif + idade;
            totalf++;
        }else if(estadocivil === 3 && idade > 30){
            divqtd30++;
        }else{
            console.log('Valor informado inválido!');
        }
        i++;
    } 
    console.log(`Media da idade dos homens: ${somaim / totalm}\nMedia de idade das mulheres: ${somaif / totalf}`);
    console.log(`Percentual de homens solteiros: ${soltm / totalm * 100}%\nPercentual de mulheres solteiras: ${soltf / totalf * 100}%`)
    console.log(`Quantidade de mulheres divorciadas acima dos 30 anos: ${divqtd30}`)

    
