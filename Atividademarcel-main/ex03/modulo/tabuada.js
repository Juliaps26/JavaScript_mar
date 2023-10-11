// Criar tabuada
const criarTabuada = (contadorInicial, contadorFinal, valorTabuada) => {
    let numInicial = contadorInicial
    let numFinal = contadorFinal
    let tabuada = valorTabuada
    

    //Imprimir a tabuada
    console.log('--------------------------------')
    console.log('          Tabuada: ' + tabuada)
    console.log('--------------------------------')


    // condição 
    while (numInicial <= numFinal){
        let resultado = tabuada * numInicial
        
        console.log(tabuada + ' x ' + numInicial + ' = ' + resultado)
        numInicial++
    }
    return true
}

// Calculo da tabuada 
const calculoTabuada = (contadorInicial, contadorFinal, tabuadaInicial, tabuadaFinal) => {

     // replace -  usado para substituir qualquer ocorrência de um caractere em uma string ou na string inteira
    let numInicial = String(contadorInicial).replace(',', '.')
    let numFinal = String(contadorFinal).replace(',', '.')
    let tabInicial = String(tabuadaInicial).replace(',', '.')
    let tabFinal = String(tabuadaFinal).replace(',', '.')
    let status = false

    if (Number(tabFinal) < Number(tabInicial)){
        tabFinal = String(tabuadaInicial).replace(',', '.')
        tabInicial = String(tabuadaFinal).replace(',', '.')
    }

    if (Number(numFinal) < Number(numInicial)){
        numFinal = String(contadorInicial).replace(',', '.')
        numInicial = String(contadorFinal).replace(',', '.')
    }

    // Erros 
    if (numInicial == '' || numFinal == '' || tabInicial == '' || tabFinal == ''){
        console.log('ERRO: É obrigatório preencher todo os campos.')
        return false

    } else if (isNaN(numInicial) || isNaN(numFinal) || isNaN(tabInicial) || isNaN(tabFinal)){
        console.log('ERRO: É obrigatório a entrada somente de números.')
        return false

    } else if (tabInicial < 0 || tabFinal > 100 || tabInicial > 100 || tabFinal < 0){
        console.log('ERRO: É permitido escolher tabuadas somente entre 2 e 100.')
        return false

    } else if (numInicial < 0 || numFinal > 50 || numInicial > 50 || numFinal < 1){
        console.log('ERRO: É permitido escolher valores entre 0 e 50.')
        return false
    }


    let contagemInicial = numInicial

    while (numInicial < numFinal){
        criarTabuada(contagemInicial, contadorFinal, tabuadaInicial)
        tabuadaInicial++
        numInicial++

        status = true
    }
}
module.exports={
    criarTabuada,
    calculoTabuada
}