const input = rquire('prompt-sync')()

function main(){
    let x = Number(input('Digite aqui um número (X): '));
    let n = Number(input('Digite aqui um número (N): '));
    let resultado = 0
        while (n > 2){
            resultado = x / n
            console.log(`${X} / ${N} = ${resultado.toFixed(2)}`)
        }
}

    x = x / N
    n--

main()