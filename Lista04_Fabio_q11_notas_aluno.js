const prompt = require('prompt-sync')()

function main(){
    var matricula = 1

    resultado = aprovado_reprovado(matricula)
    total = resultado[0]
    aprovados = resultado[1]
    reprovados = resultado[2]

    console.log(`Haviam ${total} de alunos na turma`)
    console.log(`Destes, ${aprovados} aluno(s) foi(ram) aprovado(s)`)
    console.log(`Destes, ${reprovados} aluno(s) foi(ram) reprovado(s)`)
    console.log()
}

aprovado_reprovado()

function aprova_reprova(){
    aprovados = 0
    reprovados = 0
    total = 0
    while(matricula !== 0){
        matricula = Number(input('Digite a matrícula do aluno: '))

    if (matricula === 0){
        break
    }
    nota_1 = 0
    while(nota_1 <= 0 || nota_1 > 10){
        nota_1 = Number(prompt('Digite a primeira nota do aluno: '))
    }
    nota_2 = 0
    while(nota_2 <= 0 || nota_2 > 10){
        nota_2 = Number(prompt('Digite a segunda nota do aluno: '))
    }
    nota_3 = 0
    while (nota_3 <= 0 || nota_3 > 10){
        nota_3 = Number(prompt('Digite a terceira nota do aluno: '))
    }
    total += 1
    media_final = ((2 * nota_1) + (3 * nota_2) + (5 * nota_3)) / 10
    
    if (media_final >= 7){
        aprovadois += 1
    }else{
        reprovados += 1
    }
return total, aprovados, reprovados

main()