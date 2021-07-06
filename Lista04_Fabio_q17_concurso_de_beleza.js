const input = require('prompt-sync')()

function main(){
    let nome = String(input('Digite aqui o nome da candidata: '));
    let altura = String(input('Digite aqui a altura da candidata: '));
    let peso = String(input('Digite aqui o peso da candidata: '));

    let alta = 0;
    let altah = 0;
    let baixan = 0;
    let baixah = 100000000000;
    let gordan = 0;
    let gordap = 0;
    let magran = 0;
    let magrap = 100000000000;

    while (nome !== "FIM" && nome !== "fim"){
        if (altura >= altah){
            altah = altura;
            altan = nome;
        }
        if (altura <= baixah){
            baixah = altura;
            baixan = nome;
        }
        if (peso >= gordap){
            gordap = peso;
            gordan = nome;
        }
        if (peso <= gordap){
            magrap = peso;
            magran = nome;
        }

        nome = String(input('Diga aqui o nome da candidata: '));
        altura = String(input('Diga aqui a altura da candidata: '));
        peso = String(input('Diga aqui o peso da candidata: '));
    }

    console.log(`===================\nCandidata mais alta:\nNome - ${altan}\nAltura - ${altah}\nCandidata mais baixa:\nNome - ${baixan}\nAltura - ${baixah\n\nCandidata mais gorda:n\Nome - ${gordan}\nPeso - ${gordap}\nCandidata mais magra:\nNome - ${magran}\nPeso - ${magrap}`);

}

main();