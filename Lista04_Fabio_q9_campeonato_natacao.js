const input = require('prompt-sync')()

function campeonato(){
    resultado()
}
function resultado(){
    clube_a = 0;
    clube_b = 0;
    num_provas = 1;
    qunt_nadadores = 1;

    while (num_provas !== 0 || qnt_nadadores !== 0){
        var num_provas = Number(input('Digite aqui o número de provas: '))
        var qnt_nadadores = Number(input('Digite aqui o número de nadadores na prova: '))
    }
    while (qnt_nadadores > 0){
        var nome = input('Digite aqui o nome do nadador: ')
        var classificacao = input('Digite aqui a classificação do nadador: ')
        var tempo = input('Digite aqui o tempo em que o nadador(es) fez(izeram): ')
        let clube = 'c'
    }
    while (clube !== 'a' && clube !== 'b'){
        var clube = input('Digite o clube do nadador("a" ou "b"): ')
    if (clube === "a"){
        clube_a += qnt_pontos(classificacao)
    }else{
        clube_b += qnt_pontos(classificacao)
    }
    qnt_nadadores -= 1

    vencedor(clube_a, clube_b)

function qnt_pontos(posicao){
    pontos = 0
    if(posicao === 1){
    pontos += 9
    }else if(posicao === 2){
    pontos += 6
    }else if (posicao === 3){
    pontos += 4
    }else if (posicao === 4){
    pontos += 3
    }
    return qnt_pontos

function vencedor(a, b){
    if(a === b){
    console.log('Não houve vencedor.')
    }else if (a > b){
    console.log('Clube "a" venceu.')
    }else{
    console.log('Clube "b" venceu.')
    console(a, b)
    }

}

vencedor()
