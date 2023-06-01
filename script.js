const formulario = document.querySelector('form');
const botaoAdicionar = document.getElementById("btn-adicionar");
const imagem = document.getElementById('imgcachorro');
const nome = document.getElementById("name");
const contextoLista = document.getElementById("contexto-lista");

const itens = JSON.parse(localStorage.getItem("itens")) || []


exibirItensNaTela();

botaoAdicionar.addEventListener("click", (e) => {
    // bloqueia o reflesh da página
    e.preventDefault();
    adicionarCachorroNaLista();
})

function adicionarCachorroNaLista(){

    // pegar a raça do cachorro
    let nomeCachorro = nome.value;
    // pegar a URL
    let enderecoImagem = imagem.src;

    // gravar numa lista

    itens.push({
        id: new Date(),
        nome: nomeCachorro,
        imagem: enderecoImagem
    });

    localStorage.setItem("itens", JSON.stringify(itens));

    exibirItensNaTela();
}

function exibirItensNaTela(){

    contextoLista.innerHTML = "";
    itens.forEach(item => {
        adicionaItemNaTela(item);
    });
}

function adicionaItemNaTela(item){
    contextoLista.innerHTML += criarItemLista(item);
    document.querySelectorAll(".btn-remove").forEach( item =>{
        item.onclick = excluiItemNaTela

    })
<<<<<<< HEAD
}

function excluiItemNaTela(e){
   e.preventDefault();
   let id = e.target.getAttribute("data-id");
   //console.log(id);
   let index = itens.findIndex(remover => (remover.id==id));
   itens.splice(index,1); 
   localStorage.setItem("itens", JSON.stringify(itens));
   location.reload();
=======
>>>>>>> eabb065da891f1e24dc792c50e3c958eb7b027a4
}

function excluiItemNaTela(e){
   e.preventDefault();
   let id = e.target.getAttribute("data-id");
   //console.log(id);
   let index = itens.findIndex(remover => (remover.id==id));
   itens.splice(index,1); 
   localStorage.setItem("itens", JSON.stringify(itens));
   location.reload();
}
    







function criarItemLista(item){

    
    return `  <div class="item" >
                    <img height="100vh" max-width="100vw" id="imgcachorro" src="${item.imagem}">
                    ${item.nome} 
                   <button class="remove btn-remove" data-id= "${item.id}">
<<<<<<< HEAD
                        X
=======
                      X 
>>>>>>> eabb065da891f1e24dc792c50e3c958eb7b027a4
                   </button>
                   
                </div>`             
}
    
formulario.addEventListener('submit', function(e) {

    // bloqueia o reflesh da página
    e.preventDefault();
   
    // Url da pesquisa API
    let urlform = "https://dog.ceo/api/breed/"+nome.value+"/images";

     // ID content
    let respota = document.getElementById('content');

    // Resposta em HTML
    let html = ''
    //pesquisa e retorna o valor
    fetch(urlform)
        .then(respota => respota.json())
        .then(function(data){
            console.log(data);
            imagem.src =  data.message[0];
            html = 'Nome:' + raca;
            respota.innerHTML = html;
        })
        .catch(function(err){
            console.log(err)
        })

    
    });
    