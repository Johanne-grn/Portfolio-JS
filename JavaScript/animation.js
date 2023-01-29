var cards = document.querySelectorAll(".card")
cards.forEach((card) => {
setTimeout(()=>{
    card.classList.add("card-animation")
},1000)
})

var image = document.querySelector("#banner");

image.addEventListener("click", audio)

function audio(){
    var audio = new Audio("./MP3/Sound.mp3");
    audio.play();
    image.classList.toggle("téléphone")
}

var text = document.getElementById("reseau")

function changeNom(){
    var contenu = text.innerHTML
    var newText = "Texte ajouter en Javascript"
    text.innerHTML = text.innerHTML + " " + newText
}

text.addEventListener("click", changeNom)
changeNom()