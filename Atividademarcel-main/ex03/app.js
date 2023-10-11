
var tabuadaVer = require('./modulo/tabuada.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada de dados 
entradaDeDados.question('Qual a tabuada inicial? Digite entre: [2 - 100]: ', function(tabuadaInicial){
    let tabInicial = tabuadaInicial

    entradaDeDados.question('Qual a tabuada final? Digite entre: [2 - 100]: ', function(tabuadaFinal){
        let tabFinal = tabuadaFinal

        entradaDeDados.question('Insira o contador inicial entre: [0 - 50]: ', function(contadorInicial){
            let nInicial = contadorInicial

            entradaDeDados.question('Insira o contador final entre: [1 - 50]: ', function(contadorFinal){
                let nFinal = contadorFinal

                tabuadaVer.calculoTabuada(nInicial, nFinal, tabInicial, tabFinal)
            })
        })
    })
})