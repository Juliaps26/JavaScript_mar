
var readline = require('readline')
var fatorialJsApp = require('./modulo/fatorial.js')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// Entrada de dados
entradaDeDados.question('Inseria o numero para descobrir seu fatorial: ', function(valorFatorial){

    fatorial = valorFatorial

    fatorialJsApp.calculoFatorial(fatorial)

})