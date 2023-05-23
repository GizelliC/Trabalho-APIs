var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e) {

    // bloqueia o reflesh da página
    e.preventDefault()
    // Url da pesquisa
    let urlform = "https://dog.ceo/api/breeds/image/random Fetch!";

    //valor do input name
    let nome = document.getElementById("name")

    //concatena a url com o inputname
    urlform = urlform + this.name.value

    // transforma os valores em minúsculas
    urlform = urlform.toLocaleLowerCase()

    // ID content
    let respota = document.getElementById('content')

    //ID imgcachorro
    let imagem = document.getElementById('imgcachorro')

    // Resposta em HTML
    let html = ''

    fetch(urlform)
        .then(respota => respota.json())
        .then(function(data){
            console.log(data)
            html = 'Nome:' + data.name
            respota.innerHTML = html
        })
        .catch(function(err){
            console.log(err)
        })

    
    });
    