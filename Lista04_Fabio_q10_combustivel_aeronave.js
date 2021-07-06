const prompt = require('prompt-sync')()

function decolagem(){
    var num_containers = Number(input('Digite aqui o número de containers: '))
    var peso_container = Number(prompt('Digite aqui o peso d eum container: '))

    const dados = dados_passageiros()
    const passageiros = dados[0]
    const bagagem = dados[1]
    const peso_carga = peso_container * num_containers
    const volume_bagagem = (bagagem * 10)
    const peso_passageiros = (70 * passageiros) + volume_bagagem

    decolar = permissao_decolar(peso_carga, peso_passageiros)
    permisao = decolar[0]
    qnt_combustivel = decolar[1]

    console.log('\nQuantidade de passageiros: %i' % passageiros)
    console.log('Volume de bagagem: %i kg' % volume_bagagem)
    console.log('Peso dos passageiros: %i kg' % peso_passageiros)
    console.log('Peso da carga: %.2f kg' % peso_carga)
    console.log('Quantidade possível de combustível: %i l' % (qntd_combustivel/1.5))
    console.log(`Mensagem: s % permissao`)

function dados_passageiros(){
    num_bilhete = 1
    qnt_bagagens = 1
    passageiros = 0
    bagagem = 0
while(num_bilhete !== 0){
        num_bilhete = Number(input('Digite aqui o número do bilhete: '))
    if num_bilhete === 0{
        break

    qnt_bagagens = Number(input('Digite aqui a quantidade de bagagens: '))
    passageiros += 1
    bagagem += qnt_bagagens
return passageiros, bagagem

function permissao_decolar(peso_carga, peso_passa){
    peso_comb = 15000
    peso_decolagem = peso_comb + peso_carga + peso_passa
    qnt_combo = 500000 - (peso_carga + peso_passa)
    if (peso_decolagem > 500000){
        msg = console.log('Permissão de decolagem negada, peso superior a 500.000 kg!')
    }else{
        msg = console.log('Permissão concedida. Voo liberado!')
    }
return msg, qnt_combo

decolagem()

