import { addTableToHTML, allItemsObjects, getRandomItems, createHTMLCarrouselItemTables, asssignActiveClass } from "./scripts/function.js";

const itemsHomePage = getRandomItems(allItemsObjects, 3);

document.addEventListener('DOMContentLoaded', () => {
  asssignActiveClass();
  initializeCarousel();
});

function initializeCarousel() {
  const $carousel = $('#carouselContainer');

  // 🛑 Étape 1 : Attacher l'écouteur 'init' et 'afterChange'
  // Ces écouteurs DOIVENT être là avant que .slick() ne soit appelé.
  $carousel.off('init afterChange'); // Sécurité contre les doubles attachements

  $carousel.on('init', function(event, slick){
    // Dès que Slick est prêt, on affiche la première table (index 0)
    console.log("Slick est prêt. Initialisation de la table 0.");
    updateActiveSlide(0, itemsHomePage);
  });
  
  $carousel.on('afterChange', function(event, slick, currentSlide){
    updateActiveSlide(currentSlide, itemsHomePage);
  });

  // 2. Étape 2 : Appeler la fonction qui CRÉE le HTML et INITIALISE Slick
  // L'appel à .slick() dans cette fonction va maintenant trouver les écouteurs attachés ci-dessus.
  createHTMLCarrouselItemTables(itemsHomePage);
}

// ... (votre fonction updateActiveSlide est correcte) ...

function updateActiveSlide(currentIndex, itemArray) {
  const $container = $('#carouselContainer');
  
  if (!$container.hasClass('slick-initialized')) return;

  // 1. Cibler les éléments du carrousel avec la classe 'first'
  // On utilise la sélection par classe car l'élément dans le DOM est 'div.first'
  const $slides = $container.find('.slick-slide:not(.slick-cloned) .first');

  if ($slides.length === 0) return;

  // 2. Mettre à jour la classe CSS (.second)
  $slides.removeClass('second');

  // Ajouter la classe à l'élément correspondant à currentIndex
  if ($slides[currentIndex]) {
    $($slides[currentIndex]).addClass('second');
  }

  // 3. Mettre à jour la TABLE ! 🎯
  if (itemArray && itemArray[currentIndex]) {
    addTableToHTML(itemArray[currentIndex].Table);
    //addTableToHTML.addClass('.animateTable');
  }
}
