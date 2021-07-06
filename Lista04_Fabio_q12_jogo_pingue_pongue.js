const prompt = require('prompt-sync')()

function main(){
    let pts_jogador_1 = 0;
    let pts_jogador_2 = 0;

}

main()

// Partida em andamento
while (pode_continuar(pts_jogador_1, pts_jogador_2)){
    let jogador = Number(prompt('Ponto: '))
    if (jogador === 1){
        pontos_jogador_1++
    }else{
        pontos_jogador_2++
    }
}

// Resultado 
let vencedor = 'Jogador'
if (pontos_jogador_1 > pontos_jogador_2){
    vencedor = vencedor + ' 01'
}else{
    vencedor = vencedor + ' 02'
}

console.log(vencedor)


function pode_continuar(pts1, pts2){
    const alvo = 6
    const diferenca = Math.abs(pts1 - pts2)
    if (pts1 < alvo && pts2 < alvo){
        return true
    }else if(diferenca < 2){
        return true
    }else{
        return false
    }

}

pode_continuar()