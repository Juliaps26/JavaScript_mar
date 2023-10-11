
const calcularIMC = (valorPeso, valorAltura) => {


    // Recebe os valores dos argumentos a função em variaveis iniciais
    // replace -  usado para substituir qualquer ocorrência de um caractere em uma string ou na string inteira
    let peso = String(valorPeso).replace(',', '.')
    let altura = String(valorAltura).replace(',', '.')
    let status = false


    // calculo do imc 
    let imc = peso / Math.pow(altura, 2)

    // Possíveis erros
    // se peso e altura não tiver dados inseridos 
    if (peso == '' || altura == '') {
        console.log('ERRO: é obrigatório preencher todos os campos.')
    } else if (isNaN(peso) || isNaN(altura)) {
        // se digitar uma string
        console.log('ERRO: é obrigatória a entrada somente de números.')
    } else {

        // Conversão de String para Number 
        peso = Number(peso)
        altura = Number(altura)
        imc = Number(imc)
    }

    // Verificar a diferença entre dois conteúdos
    if(imc != undefined){
        return imc
    } else {
        return false
    }

}

const verificarIMC = (imc) => {

    let iImc

    // Condições para exibir

    if (iImc <= 18.5) {
        iImc = ': Você está abaixo do peso'
    } else if (imc <= 24.9) {
        iImc = ': Você está no peso ideal, Parabéns!'
    } else if (imc <= 29.9) {
        iImc = ': Você está levemente acima do peso.'
    } else if (imc <= 34.9) {
        iImc = ': Você está com obesidade grau I.'
    } else if (imc <= 39.9) {
        iImc = ': Você está com obesidade grau II (severa).'
    } else if (imc <= 40) {
        iImc = ': Você está com obesidade grau III (mórbida).'
    }
    
    return iImc
}

module.exports = {
    calcularIMC,
    verificarIMC
}