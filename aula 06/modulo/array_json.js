/***
 * Objetivo: Trabalhar com conceitos de ARRAY e JSON
 * Data: 27/09/2023
 * Autor: Julia
 * Versão: 1.0
 */

// [ ] -> significa uma estrutura de ARRAY - colchete
// { } -> significa uma estrutura de JSON - chave

// xml - formmato de dados antigo
// JSON - formato de dados mais atual
// {atributo: valor, atributo: valor}

// criar uma função
const conceitoArray = function(){
    // Criando Array(Matriz) e atribuindo conteudo nele, guardando a lista de nomes
    let listaDeNome = ['José', 'Maria', 'Luiz', 'Ana', 100, true];

// Printando tudo que tem dentro do objeto Lista de nomes (array)
    console.log(listaDeNome);
// Printa em tabela, jogando cada nome em um indice, começando do zero
    console.table(listaDeNome);


    // Pegar elementos individuais do Array, através do indice 
    console.log(listaDeNome[0])



    // TYPE OFF - retorna o tipo de dados do array ou do conteúdo de cada indíce 

    // Pegar o tipo de dado que esta sendo guardado, no caso da lista de nome é um objeto
    console.log(typeof(listaDeNome));
    // Tipo de dado da lista de nome do indice 4, podendo guardar varios em um só array. 
    console.log(typeof(listaDeNome[3]));
    console.log(typeof(listaDeNome[5]));


    // Mudar conteúdo de um indice
    listaDeNome[1] = 'Maria da Silva';
    console.table(listaDeNome);

    // Adiciona novos elementos no array no fim da lista 
    listaDeNome.push('André da Silva');
    // Adiciona novos elementos no array no fim da lista de uma vez, so separar por virgula
    listaDeNome.push('Carlos da Silva', 'Suzane da Silva', 'Julia da Silva')
    console.table(listaDeNome);

// Manipular o array, adicionando novos elementos no inicio (unshift)
// obs: cuidado pois ele reorganiza todos os indices e seus conteúdos    
    listaDeNome.unshift('Nathália da Silva', 'Pedro da Silva');
    console.table(listaDeNome);


    // Remove elementos do fim do array
    listaDeNome.pop();
    console.table(listaDeNome);

// Remove elementos do array com base no seu indice qntde d itens
// Obs: splice (3,1)  - O primeiro argumento é a referencia do indice
// O segundo elemento é a qntde de elementos que será removido 
    listaDeNome.splice(3,3)
    console.table(listaDeNome);

// Remove um elemento do inicio do array
    listaDeNome.shift();
    console.table(listaDeNome);


}

const percorrendoArray = function(){
 let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Computador', 'Caixa de Som', 'Impressora', 'Fone de Ouvido', 'Web Cam', 'Microfone', 'HD', 'Memória', 'Mouse'];

 // Length - retorna a quantidade de elementos de um array 
 // - para chamar a função no final usando o console log : percorrendoArray();
 console.log(listaDeProdutos.length);


 //WHILE
//  let cont = 0;
//  while(cont < listaDeProdutos.length){
//     console.log(`Nome do produto: ${listaDeProdutos[cont]}`);
//     cont+=1;
//  }


//FOR 
for(let cont = 0; cont < listaDeProdutos.length; cont++){
console.log(`Nome do produto: ${listaDeProdutos[cont]}`);

}


//FOREACH
// listaDeProdutos.forEach(function(produto){
//     console.log(`Nome do Produto:${produto}`)

// })


// INDEXOF - permite localizar um conteúdo no array e retorna seu indice
// Caso o indexof não encontre o item sempre retornará -1
// console.log(listaDeProdutos.indexOf('Impressora'));


// INCLUDES - permite localizar um conteúdo no array e retorna (true/false)
console.log(listaDeProdutos.includes('Web Cam'));



}


// Criando função para verrificar se tem ou não um produto 
const filtarProduto = function(nomeProduto){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Computador', 'Caixa de Som', 'Impressora', 'Fone de Ouvido', 'Web Cam', 'Microfone', 'HD', 'Memória'];

// Criar variavel nome
let nome = nomeProduto;
let status = false;
let cont = 0;

    //Usando o Indexof

    // se o retorno for maior que zero (0) verdadeiro (true)
    // if (listaDeProdutos.indexOf(nome) >= 0);
    // status = true;


    //Usando o includes

    // se lista de produtos includes da variavel nome 
    // if(listaDeProdutos.includes(nome))
    // status = true;

    // Usando o includes sem o if

    // status = listaDeProdutos.includes(nome)


    // Fazendo o filtro Manual

// fazendo validação sem usar indexof e includes
// toUpperCase - caso escreve maiusculo minisculo ele valida do mesmo jeito 
// Manualmente da pra se contar também a quantidade que repete seja o nome, produto

listaDeProdutos.forEach(function(produto){
        if(produto.toUpperCase() == nome.toUpperCase())
        // status = true;
        cont++;
    })

    // return status;
    return cont;
}

const conceitoJSON = function(){

    // Criando variavel JSON e colocando atributos manuais
    let aluno = {nome: 'José da Silva', telefone: '1147977747', celular: '11989787664'};
    // criar outro aluno
    let aluno2 = {nome: 'Julia P', telefone: '44859623', celular: '1198987775'};
    let aluno3 = {nome: 'Andre ', telefone: '488859623', celular: '119896885'};


    let arrayAlunos = [];

// Criando um objeto do tipo array e guardando dois elementos JSON dentro dele 
    arrayAlunos.push(aluno, aluno2, aluno3);

    // Criando atributos novos no JSON
    aluno.email = 'josegmail.com';
    aluno.ra = 122344;

    // Exibindo todos os atributos da variavel 
    console.log(aluno);

    // Pegar atributo individual do JSON, nome do objeto mais do atributo
    console.log('O nome do aluno é'+ aluno.nome);

    console.log(arrayAlunos);

    // retornar todos os dados
    // FOREACH - percorrer o array, e para cada indice que ele encontrar no array ele devolve na variavel dados por ex
arrayAlunos.forEach(function(dados){
    console.log('Nome do aluno: ' + dados.nome);
    console.log('Celular do aluno: ' + dados.celular);
    console.log('Telefone do aluno: ' + dados.telefone);
    if(dados.email != undefined)
    console.log('Email do aluno: ' + dados.email);
    if(dados.ra != undefined)
    console.log('RA do aluno: ' + dados.ra);
    console.log('***************************\n')
})

}

const cadastroProdutos = function(){

    // Variavel para guardar varios produtos
    let arrayProdutos = [];

    let categorias = [
                         {id: 1, nome_categoria: 'Hardware', descricao_categoria: 'Equipamentos de hardware para PC'},   
                         {id: 2, nome_categoria: 'Periféricos', descricao_categoria: 'Periféricos para PC'},
                         {id: 3, nome_categoria: 'Games', descricao_categoria: 'Jogos e acessórios para PC'},
                         {id: 4, nome_categoria: 'Escritório', descricao_categoria: 'Itens de infórmatica para escritório'}      
                    ];

    let cores = [
                {id: 1, nome_cor: 'Preto'},         
                {id: 2, nome_cor: 'Branco'},     
                {id: 3, nome_cor: 'Cinza'},     
                {id: 4, nome_cor: 'Azul'},     
                {id: 5, nome_cor: 'Vermelho'},     
                ];
                
    let marcas = [
                {id: 1, nome_marca: 'Dell', telefone:'1192992982', email: 'dell@gmail.com'},
                {id: 2, nome_marca: 'Intel', telefone:'114542982', email: 'intel@gmail.com'},
                {id: 3, nome_marca: 'AMD', telefone:'1323492982', email: 'amd@gmail.com'},
                {id: 4, nome_marca: 'Multilaser', telefone:'11168237982', email: 'multilaser@gmail.com'},
                {id: 5, nome_marca: 'Logitech', telefone:'11391276982', email: 'logitech@gmail.com'},
                {id: 6, nome_marca: 'Positivo', telefone:'1192022982', email: 'positivo@gmail.com'}
                  ];

         let produto1 = {
            id: 1,
            nome: 'Mouse',
            descricao: 'Mouse optico com fio',
            valor: 80,
            qntde: 200,
            categoria: categorias[1],
            cor: [
                cores[0],
                cores[1]
            ],
            marca: marcas[0]
         };

         let produto2 = {

            id: 2,
            nome: 'Teclado',
            descricao: 'Teclado com fio mecanico',
            valor: 120,
            qntde: 500,
            categoria: categorias[1],
            cor: cores,
            marca: marcas[2]
         };

         let produto3 = {

            id: 3,
            nome: 'Caixa de Som',
            descricao: 'Caixa de som com fio',
            valor: 100,
            qntde: 80,
            categoria: categorias[4],
            cor: [
                cores[0],
                cores[1],
                cores[2]
            ],
            marca: marcas[3]
            };

            // Criando elementos dentro do array do produto, pegando produtos individuais e colocando dentro de um so objeto
            arrayProdutos.push(produto1,produto2,produto3);

            // Adicionando o array com todos os produtos em um  atributo tipo JSON
            JSONProdutos.produtos = arrayProdutos;
            JSONProdutos.count = arrayProdutos.length;

            // exibir todos os elementos 
            //console.log(arrayProdutos);

            return JSONProdutos;
         }
            console.log(cadastroProdutos());

// conceitoJSON();

// Chamar a funcao para mostra ela
// - conceitoArray();
// - percorrendoArray();

// console.log(filtarProduto('Mouse')); - //Para ver se existe na base ou não, retornando false ou true
