
// import do arquivo de funções
var calculoMedias = require('./modulo/calculoMedias.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// Entrada de dados : nome,sexo, nome professor, sexo do professor, nome da disciplina, nome do curso, e as notas


entradaDeDados.question('Insira o nome do aluno: ', function (nomeAluno) {
    let nAluno = nomeAluno

    entradaDeDados.question('Insira o sexo do aluno [Feminino - Masculino]: ', function (sexoAluno) {
        let pAluno = sexoAluno
        pAluno = calculoMedias.verificarPronomeAluno(sexoAluno)

        if (pAluno) {
  entradaDeDados.question('Insira o nome do professor: ', function (nomeProf) {
                let nProf = nomeProf

  entradaDeDados.question('Insira o sexo do professor [Feminino - Masculino]: ', function (sexoProf) {
                    let pProf = calculoMedias.verificarPronomeProf(sexoProf)

    entradaDeDados.question('Qual a disciplina? ', function (nomeDisc) {
         let disciplina = nomeDisc
 entradaDeDados.question('Em qual curso? ', function (nomeCurso) {
                            let curso = nomeCurso
      entradaDeDados.question('Digite a primeira nota [0 - 100]: ', function (nota1) {
                let n1 = nota1
     entradaDeDados.question('Digite a segunda nota [0 - 100]: ', function (nota2) {
              let n2 = nota2
  entradaDeDados.question('Digite a terceira nota [0 - 100]: ', function (nota3) {
      let n3 = nota3
   entradaDeDados.question('Digite a quarta nota [0 - 100]: ', function (nota4, media) {
    let n4 = nota4
    let situacaoExame
     let exame
 media = calculoMedias.calcularMedias(nota1, nota2, nota3, nota4)
    if (media){
      let situacao
      situacao = calculoMedias.verificarStatus(media)
     if (situacao == 'EM EXAME'){
  entradaDeDados.question('Digite a nota de exame [0 - 100]: ', function(notaExame){
     let nE = notaExame
       exame = calculoMedias.exame(media, nE)
     if(exame){
      situacaoExame = calcularMedias.verificarProva(exame)
     calculoMedias.relatorio(nAluno, nProf, pAluno, pProf, disciplina, curso, situacao)
        calculoMedias.relatorioExame(pAluno, n1, n2, n3, n4, nE, situacaoExame, media, exame)
      }
 })
    } else {
       calculoMedias.relatorio(nAluno, nProf, pAluno, pProf, disciplina, curso, situacao)
         calculoMedias.relatorioAvaliacao(pAluno, n1, n2, n3, n4, media)
         }
         }
                           })
                         })
                       })
                     })
                  })
                })
             })
          })
        }

    })

})