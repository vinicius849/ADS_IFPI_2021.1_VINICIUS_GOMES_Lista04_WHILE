const prompt = require('prompt-sync')()

function eleicao(){
    pesquisa_eleicao()
}

eleicao()

function pesquisa_opiniao(){
    console.log('Serra = 45, Dima = 13, Ciro Gomes = 23, Indeciso = 99, Outros = 98, Nulo/Branco = 0.')
    opiniao = Number(input('Digite aqui sua intenção de voto: '))
    votos_serra = 0
    votos_dilma = 0
    votos_ciro_gomes = 0
    votos_indeciso = 0
    votos_outros = 0
    votos_nulos = 0
    total_entrevistados = 0
}
    while (opiniao > -1){
        if (opiniao === 45){
        votos_serra += 1
        }else if (opiniao === 13){
        votos_dilma += 1
        }else if (opiniao === 23){
        votos_ciro_gomes += 1
        }else if (opiniao === 99){
        votos_indeciso += 1
        }else if (opiniao === 98){
        votos_indeciso += 1
        }else if (opiniao === 0){
        votos_nulos += 1
        }

    opiniao = Number(input('A sua intenção de votos será: ')

    total_entrevistados += 1

    percentual_serra = (votos_serra * 100) / total_entrevistados
    percentual_dilma = (votos_dilma * 100) / total_entrevistados
    percentual_ciro_gomes = (votos_ciro * 100) / total_entrevistados
    segundo = segundo_turno(percentual_serra, percentual_dilma, percentual_ciro)

    console.log('Votos em Serra: %.2f' % percentual_serra+'%')
    console.log('Votos em Dilma: %.2f' % percentual_dilma+'%')
    console.log('Votos em Ciro: %.2f' % percentual_ciro+'%')
    console.log('Votos em outros candidatos: %.2f' % ((voto_outros * 100) / total_entrevistados) + '%')
    console.log('Eleitores indecisos: %.2f' % ((eleitor_indeciso * 100)/total_entrevistados)+'%')
    console.log('Votos nulos/brancos: %.2f' % ((votos_nulos * 100)/total_entrevistados)+'%')
    console.log('Total de entrevistados: %i' % total_entrevistados)
    console.log(segundo)


function segundo_turno(p_serra, p_dilma, p_ciro):
    if ((percentual_serra >= 51.0 || percentual_dilma >= 51.0 || percentual_ciro_gomes >= 51.0)){

    }   return print
    
    console.log('Haverá Segundo Turno.')

pesquisa_opiniao()