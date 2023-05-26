const formulario = document.querySelector('form');
const botaoAdicionar = document.getElementById("btn-adicionar");
const imagem = document.getElementById('imgcachorro');
const nome = document.getElementById("name");
const contextoLista = document.getElementById("contexto-lista");

const itens = JSON.parse(localStorage.getItem("itens")) || []


exibirItensNaTela();

botaoAdicionar.addEventListener("click", (e) => {
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
}

function criarItemLista(item){

    
    return `  <div class="item" >
                    <img height="100px" max-width="100px" id="imgcachorro" src="${item.imagem}">
                    ${item.nome} 
   
                </div>`             
}

function botaoDeleta(){
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"
    elementoBotao.addEventListener("click", function(){
        deletaElemento(this.parentNode);
    })
    return elementoBotao;
}

function deletaElemento(tag){
    tag.remove()
    itens.splice(itens.findindex(elemento => elemento.id === id))
    localStorage.setItem("itens", JSON.stringify(itens))
}



formulario.addEventListener('submit', function(e) {

    // bloqueia o reflesh da página
    e.preventDefault();
   
    // Url da pesquisa
    let urlform = "https://dog.ceo/api/breed/"+nome.value+"/images";

     // ID content
    let respota = document.getElementById('content');

    //ID imgcachorro
    

    // Resposta em HTML
    let html = ''

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
    