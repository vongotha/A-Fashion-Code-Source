import { addTableToHTML, allItemsObjects, getRandomItems, createHTMLCarrouselItemTables, asssignActiveClass } from "./scripts/function.js";

const itemsHomePage = getRandomItems(allItemsObjects, 3);

document.addEventListener('DOMContentLoaded', () => {
  asssignActiveClass();
  initializeCarousel();
});

function initializeCarousel() {
<<<<<<< HEAD
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
=======
  createHTMLCarrouselItemTables(itemsHomePage);

  // ✅ Lier l’événement au bon conteneur
  $('#carouselContainer').off('afterChange').on('afterChange', function(event, slick, currentSlide){
>>>>>>> 595e9d4c371762a3218371f14baa92428e03fe0c
    updateActiveSlide(currentSlide, itemsHomePage);
  });
  
  // Initialiser la première table
  updateActiveSlide(0, itemsHomePage);

<<<<<<< HEAD
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
=======
  console.log("Carousel initialized:", $('#carouselContainer').length > 0);
  $('#carouselContainer').on('init', function() {
    console.log("Slick initialized");
  });
  $('#carouselContainer').on('afterChange', function(event, slick, currentSlide){
    console.log("Slide changed to:", currentSlide);
  });
}

function updateActiveSlide(currentIndex, itemArray) {
  const $container = $('#carouselContainer');

  // Si Slick n'est pas initialisé, on revient
  if (!$container.hasClass('slick-initialized')) return;

  // Récupérer l'instance Slick et ses slides réelles (jQuery collection)
  const slick = $container.slick('getSlick');
  if (!slick) return;

  const $slides = $(slick.$slides); // slides "réelles" (sans clones)

  // Retirer la classe sur toutes les vraies slides
  $slides.removeClass('second');

  // Mettre à jour la table (comme avant)
  if (itemArray[currentIndex]) {
    addTableToHTML(itemArray[currentIndex].Table);
  }
}

>>>>>>> 595e9d4c371762a3218371f14baa92428e03fe0c
