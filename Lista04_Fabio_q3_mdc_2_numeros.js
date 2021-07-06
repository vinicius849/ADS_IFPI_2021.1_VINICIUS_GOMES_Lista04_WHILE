const prompt = require('prompt-sync')()

// Descobrir o MDC (máximo divisor comum) usando exemplo anterior.
function divisao(){
    const num_1 = Number(prompt('Digite o número 1: '));
    const num_2 = Number(prompt('Digite o número 2: '));

    var mdc = function(num_1, num_2){
    var resto;

}

divisao()
// Usando do..while para achar a resposta dos divisores em comum entre 2 números.
    do {
        resto = num1 % num2;

        num1 = num2;
        num2 = resto;

    } while (resto != 0){

    return num1;
}

// Testes
    try {
function assert(){
    assert.equal(3, mdc(24, 9));
    assert.equal(10, mdc(30, 20));
}
    catch(e) {
    console.log(e);
    }

assert()