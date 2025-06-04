import { addTableToHTML, allItemsObjects, randomItems } from "./function.js";
/*
  document.addEventListener('DOMContentLoaded', () => {
      const carousel = document.querySelector('.carousel');
      const carouselItems = carousel.querySelector('.carousel-items');
      const prevButton = carousel.querySelector('.prev-button');
      const nextButton = carousel.querySelector('.next-button');
      const items = carouselItems.querySelectorAll('.carousel-item');
      const itemCount = items.length;
      let currentIndex = 0;
    
      function updateCarousel() {
        const translateValue = -currentIndex * 100 + '%';
        carouselItems.style.transform = `translateX(${translateValue})`;
      }
    
      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        updateCarousel();
      });
    
      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();
      });
    
      // Initialisation (afficher le premier élément)
      updateCarousel();
  });

  function weather() {
    const data = fetch('https://api.openweathermap.org/data/2.5/weather?q=kinshasa&appid=6fb6c4368adbad0def0eaa565bbfa15f')

      .then(response => response.json())
      .then(data => {
          console.log(data);
      })
  }
  //weather()

  class BasicCarousel {
    constructor(containerId, items, addTableToHtml) {
      this.containerId = containerId;
      this.items = items;
      this.addTableToHtml = addTableToHtml;
      this.container = document.getElementById(containerId);
      this.itemsContainer = null;
      this.prevButton = null;
      this.nextButton = null;
      this.currentIndex = 0;

      if (!this.container) {
        console.error(`Le conteneur du carrousel avec l'ID "${containerId}" n'a pas été trouvé.`);
        return;
      }

      this.initializeCarousel();
    }

    renderItems() {
      this.itemsContainer.innerHTML = '';
      this.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carousel-item');
        itemDiv.textContent = item.Nom || 'Élément'; // Utilise le nom de l'item si disponible
        this.itemsContainer.appendChild(itemDiv);
      });
      this.updateVisibility();
      this.loadCurrentTable();
    }

    createNavigationButtons() {
      this.prevButton = document.createElement('button');
      this.prevButton.textContent = 'Précédent';
      this.prevButton.classList.add('carousel-nav');
      this.prevButton.addEventListener('click', () => this.navigateTo('prev'));

      this.nextButton = document.createElement('button');
      this.nextButton.textContent = 'Suivant';
      this.nextButton.classList.add('carousel-nav');
      this.nextButton.addEventListener('click', () => this.navigateTo('next'));

      this.container.appendChild(this.prevButton);
      this.container.appendChild(this.nextButton);
    }

    navigateTo(direction) {
      if (this.items.length <= 1) return;

      if (direction === 'prev') {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      } else if (direction === 'next') {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      }
      this.updateVisibility();
      this.loadCurrentTable();
    }

    updateVisibility() {
      const carouselItems = this.container.querySelectorAll('.carousel-item');
      carouselItems.forEach((item, index) => {
        item.style.display = index === this.currentIndex ? 'block' : 'none';
      });
    }

    loadCurrentTable() {
      const currentItem = this.items[this.currentIndex];
      if (currentItem && this.addTableToHtml) {
        this.addTableToHtml(currentItem.Table);
      }
    }

    initializeCarousel() {
      this.container.classList.add('basic-carousel-container');
      this.itemsContainer = document.createElement('div');
      this.itemsContainer.classList.add('basic-carousel-items');
      this.container.appendChild(this.itemsContainer);

      this.createNavigationButtons();
      this.renderItems();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const itemsHomePage = [
      { Nom: 'Élément A', Table: 'path/to/tableA.csv' },
      { Nom: 'Élément B', Table: 'path/to/tableB.csv' },
      { Nom: 'Élément C', Table: 'path/to/tableC.csv' }
    ];

    function addTableToHtml(tablePath) {
      console.log(`Chargement de la table depuis : ${tablePath}`);
      // Ici, tu implémenterais la logique pour réellement charger et afficher la table
    }

    const basicCarousel = new BasicCarousel('basic-carousel', itemsHomePage, addTableToHtml);
  });

*/

// Call this function after your table is added to the DOM
addTableToHTML(allItemsObjects[1].Table)