// Chamar o nosso modulo
var calcularIMC = require('./modulo/calcularIMC.js')
var readline = require('readline')

// readLine - Facilita a entrada e a leitura da saída fornecida pelo usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDeDados.question('Qual seu peso em kg?: ', function(pPeso){
    let peso = pPeso

    entradaDeDados.question('Qual a sua altura?: ', function(aAltura){
        let altura = aAltura

        // chama a função do IMC encaminhando os valores que o usuário digitou
        let imc = calcularIMC.calcularIMC(peso, altura)
        let iIMC

        if(imc){
            iIMC = calcularIMC.verificarIMC(imc)
            console.log('IMC: ' + String(imc.toFixed(2)) + iIMC)
        }
        entradaDeDados.close()
    })
})