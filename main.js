(function init() {
    let $characterImage = document.querySelector(".character-data__hero-image")
    let $characterDescription = document.querySelector("p.character-data__text")
    let $searchBox = document.querySelector(".search__box")
    let $searchImage = document.querySelector(".search__image")

    $searchImage.onclick = function changeHero() {
        switch ($searchBox.value) {
            case 'Black Widow':
                $characterImage.src = '**buscar na api a img**';
                break;
            case 'Captain America':
                $characterImage.src = '**buscar na api a img**';
                break;
            case '..':
                $characterImage.src = '**buscar na api a img**';
                break;
             case '..':
                $characterImage.src = '**buscar na api a img**';
                break;
             case '..':
                $characterImage.src = '**buscar na api a img**';
                break;
             case '..':
                $characterImage.src = '**buscar na api a img**';
                break;
             case '..':
                $characterImage.src = '**buscar na api a img**';
                break;
             case '..':
                $characterImage.src = '**buscar na api a img**';
                break;
             default:
                
        }   
    }

    let $footerAboutText = document.querySelector(".bars-footer__text")
    let $aboutModal = document.querySelector(".about-modal")
    let $modalCloser = document.querySelector(".about-modal_close")
     
    $footerAboutText.onclick = function openModal() {
        $aboutModal.style.display = "block";
    }
    
    $modalCloser.onclick = function closeModal() {
        $aboutModal.style.display = "none";
    }

  /*  if ($aboutModal.display = "block") {
        window.onclick = function(event) {
            if (event.target != $aboutModal) {
              $aboutModal.style.display = "none";
            }
          }
    }*/
})();

/* 

Line 48 - não está setando modal para display none quando clica na janela fora do modal

Line 46 - close do modal quebrou

Input datalist - a setinha não está alinhada bonitinha

*/