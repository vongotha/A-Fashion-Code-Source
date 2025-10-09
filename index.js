import { addTableToHTML, allItemsObjects, getRandomItems, createHTMLCarrouselItemTables, asssignActiveClass } from "./scripts/function.js";

const itemsHomePage = getRandomItems(allItemsObjects, 3);

document.addEventListener('DOMContentLoaded', () => {
  asssignActiveClass();
  initializeCarousel();
});

function initializeCarousel() {
  createHTMLCarrouselItemTables(itemsHomePage);

  // ✅ Lier l’événement au bon conteneur
  $('#carouselContainer').off('afterChange').on('afterChange', function(event, slick, currentSlide){
    updateActiveSlide(currentSlide, itemsHomePage);
  });
  
  // Initialiser la première table
  updateActiveSlide(0, itemsHomePage);

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

