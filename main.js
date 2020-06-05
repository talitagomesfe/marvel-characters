var $characterImage = document.querySelector(".character-data__hero-image")
var $characterDescription = document.querySelector("p.character-data__text")
var $searchBox = document.querySelector(".search__box")
var $searchImage = document.querySelector(".search__image")

$searchImage.onclick = function changeHero() {
    $characterDescription.innerText = "Character '" + $searchBox.value + "' not found.";
    $characterImage.src="https://image.freepik.com/vetores-gratis/mulher-bonita-com-ponto-de-interrogacao-acima-da-cabeca_97632-1902.jpg";
}