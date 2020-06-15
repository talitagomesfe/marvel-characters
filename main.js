(function init() {
    let $characterImage = document.querySelector(".character-data__hero-image")
    let $characterDescription = document.querySelector(".character-data__text")
    let $searchBox = document.querySelector(".search__box")
    let $searchImage = document.querySelector(".search__image")
    let $characterImageBox = document.querySelector(".character-data__image")
    let $headerImage = document.querySelector(".header-image")
    let $heroName = document.querySelector(".character-data__hero-name")

    $headerImage.onclick = function reload() {

        $characterImage.style.backgroundImage =  "url('heroes-silhouette.gif')";
        $characterDescription.innerText = `“I still believe in heroes.”
        – Nick Fury (Avengers Assemble, 2012)`;
        $searchBox.value = "";
    }

    $searchImage.onclick = function changeHero() {

        if ($searchBox.value == "") {
            $characterImage.style.backgroundImage =  "url('heroes-silhouette.gif')";
            $characterDescription.innerText = `“I still believe in heroes.” 
            – Nick Fury (Avengers Assemble, 2012)`;
        } else {
        fetch(`https://gateway.marvel.com/v1/public/characters/${$searchBox.value}?ts=1&apikey=1df8f0e5fa9e43663d12ebde36bd3845&hash=121642fd9539338acb713a221380db01`).then(function (response) {
            return response.json();
        }).then(function (data){

            let heroThumbnail = data.data.results[0].thumbnail;

            let heroName = data.data.results[0].name;
            
            $characterImage.style.backgroundImage = `url(${heroThumbnail.path}.${heroThumbnail.extension})`;
            $characterImageBox.style.border = "black";
            $heroName.innerText = heroName;

            

            $characterDescription.innerText = data.data.results[0].description;
            $characterDescription.style.fontSize = "17px";
            if ($characterDescription.innerText == "") {
                $characterDescription.innerText = "This hero description is not available at Marvel's API right now.";
            }
        });
        }      
    } 

    let $footerAboutText = document.querySelector(".bars-footer__text")
    let $aboutModal = document.querySelector(".about-modal")
    let $modalCloser = document.querySelector(".about-modal_close")
    let $overlayModal = document.querySelector(".overlay-modal")
     
    function openModal() {
        $aboutModal.style.display = "flex";
        $overlayModal.style.display = "block";
    }

    $footerAboutText.onclick = openModal

    function closeModal() {
        $aboutModal.style.display = "none";
        $overlayModal.style.display = "none";
    }
    
    $modalCloser.onclick = closeModal

    $overlayModal.onclick = closeModal
    

})();