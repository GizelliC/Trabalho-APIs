var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e) {

    // bloqueia o reflesh da página
    e.preventDefault()
   
    //valor do input name
    let nome = document.getElementById("name");

    // Url da pesquisa
    let urlform = "https://dog.ceo/api/breed/"+nome.value+"/images";

     // ID content
    let respota = document.getElementById('content');

    //ID imgcachorro
    let imagem = document.getElementById('imgcachorro');

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
    