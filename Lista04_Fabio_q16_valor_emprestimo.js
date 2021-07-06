const prompt = require('prompt-sync')()

function main(){
    const valor_emprestimo = Number(prompt('Digite aqui o valor do empréstimo: '))

    quitar_emprestimo(valor_emprestimo)
}

main()

function quitar_emprestimo(val){
    var dias = 0
    while val > 0{
        dias += 1
    if val < 0{
        break
    val *= 1.0085
    val -= 200

    console.log('O valor pago em dias será: ')

quitar_emprestimo()