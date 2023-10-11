
const calculoFatorial = (valorFatorial) => {

    let fatorial = String(valorFatorial).replace(',', '.')

    // erros 
    if(fatorial == ''){
        console.log('ERRO: Você deve inserir um valor')
        return false
        
    } else if(isNaN(fatorial)){
        console.log('ERRO:É obrigatório inserir um número')
        return false

    }else if (Number(fatorial) == 0){
        console.log('ERRO: Não existe fatorial de 0')
        return false

    }else if (Number(fatorial) == 1){
        console.log('ERRO: Você tem que inserir um valor maior que 1')
        return false

    }else if (Number(fatorial) < 0){
        console.log('ERRO: Você tem que inserir um valor positivo')
        return false

    }

    fatorial = Number(fatorial)
    let resultado = 1
    let resposta = fatorial, aux = fatorial

    while (fatorial >= 1){

        resultado *= fatorial

        if(fatorial != 1)
        resposta = `${resposta} x ${fatorial-1}`
        else
        resposta = `${resposta}`

        fatorial--

    }

    console.log(`O fatorial de ${aux} é: ${resposta} = ${resultado}`)
    return true

}
module.exports = {
    calculoFatorial

}