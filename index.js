import { addTableToHTML,randomItems,allItemsObjects, getRandomItems, createHTMLCarrouselItemTables, asssignActiveClass } from "./scripts/function.js";

const itemsHomePage = getRandomItems(allItemsObjects, 3)

const slides = document.getElementsByClassName('first');
let slideIndex = 1;
let intervalId = null;

document.addEventListener('DOMContentLoaded', () => {
  asssignActiveClass()
  initializeCarousel()
}) 

function initializeCarousel() {
  createHTMLCarrouselItemTables(itemsHomePage)
  const prevButton = document.querySelector('.arrow-left');
  const nextButton = document.querySelector('.arrow-right');
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
  if (slides.length > 0) {
    slides[slideIndex].classList.add('second');
    intervalId = setInterval(nextSlide, 3000);
    clearInterval(intervalId);
  }

  showSlides(slideIndex);
}

function showSlides (index) {

  if (index >= slides.length) {
    slideIndex = 0;
  }
  else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  const slidesArray = [...slides];
  slidesArray.forEach(item => {
    item.classList.remove('second');
  });

  slides[slideIndex].classList.add('second');
  addTableToHTML(itemsHomePage[slideIndex].Table);
}
function nextSlide() {
  slideIndex++
  showSlides(slideIndex);
}
function prevSlide() {
  clearInterval(intervalId);
  slideIndex--
  showSlides(slideIndex);
}