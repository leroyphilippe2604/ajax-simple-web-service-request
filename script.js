const quote = document.getElementById('block'); /* j integre le document dans la constante quote */
const run = document.getElementById('run');
const img = document.querySelector('img'); /* j'integre la balise img dans la constante img */
const auteur = document.getElementById('auteur');

function citation(){
    fetch('https://thatsthespir.it/api')
    .then(res => res.json())
    .then((data) =>{
        printnote(data)
    })
}

function printnote(data){
    quote.innerHTML = data.quote;
    auteur.innerHTML = data.author;
    img.src = data.photo;
}

citation()


run.addEventListener('click', citation);