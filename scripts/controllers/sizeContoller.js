import {verifyContent,createMainHTMLItem,randomItems, getRandomItems, createCarrouselItems, filterProducts, voidSearch, createBrandSelection, filterBrands, asssignActiveClass} from "../function.js";

document.addEventListener('DOMContentLoaded', () => {
  asssignActiveClass()
  createCarrouselItems(itemLowerCarousel, 'miniCarousel')
  init()
});

const selectBrand = document.querySelector('#brand-select')
const searchInput = document.getElementById('searchInput')
const applyButton = document.getElementById('apply')
const resetButton = document.getElementById('resetButton')
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const radios = document.querySelectorAll('input[type="radio"]')
const selectedCategories = Array.from(document
  .querySelectorAll('.categories:checked')).map(checkbox => checkbox.value)

// Create the Elements for the lower carousel 
const itemLowerCarousel = getRandomItems(randomItems,26)

// Create The dynamic list for our Page 
const defaultsItem = getRandomItems(randomItems,26)


selectBrand.addEventListener('change', () => {
  //console.log("Ouvert sur => ",selectBrand.value)
  const searchText = selectBrand.value
  const brandFilter = filterBrands(defaultsItem, searchText)
  createMainHTMLItem(brandFilter)
})

/**
 * 
 */
resetButton.addEventListener('click', () => {
  radios.forEach( item => {
    item.checked = false
  })
  checkboxes.forEach( item => {
    item.checked = false
  })
  checkboxes[0].checked = true
  radios[0].checked = true
  init()
})
applyButton.addEventListener('click', () => {updateMainContent()})

radios.forEach(function(radio) {
  radio.addEventListener('change', function() { 
    updateMainContent()
  });
});
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() { 
    updateMainContent()
  });
});

searchInput.addEventListener('keyup', function (event) {
  const searchText = searchInput.value

  const filteredProducts = filterProducts(defaultsItem, [], searchText)
  createMainHTMLItem(filteredProducts)
  if (filteredProducts.length === 0) {
    voidSearch()
  }
})


function updateMainContent () {
  const applyButton = document.getElementById('apply');
  const main = document.querySelector('.main');
  const genderSelected = document.querySelector('input[name="gender"]:checked')?.value;
  const selectedCategories = Array.from(document.querySelectorAll('.categories:checked'))
    .map(checkbox => checkbox.value);

  main.innerHTML = ''
  
  if (checkboxes[0].checked === true || radios[0].checked === true){
    init()
  } else {

    let listByGender = []
    if (!(genderSelected === 'All')){
      defaultsItem.forEach(item => {
        if (item.Gender === genderSelected) {
          listByGender.push(item)
        }  
      })
    } else {
      listByGender = defaultsItem
    }
    
    const filteredList = []
    listByGender.forEach(item => {
      for (let index = 0; index <selectedCategories.length; index++) {
        if (item.categories === (selectedCategories[index]).toUpperCase()) {
          filteredList.push(item);
        } else {
          continue;
        }
      }
    })
    verifyContent(filteredList)
  }
}

function init () {
  createMainHTMLItem(defaultsItem)
}

// Ajouter de l'animation a l'ajout du contenu dans le DOM

  const targetNode = document.querySelector('.main');
  const config = {
    childList: true,
    subtree: true
  }
  const callback = function(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        targetNode.classList.remove('animateContent');
        void targetNode.offsetHeight;
        targetNode.classList.add('animateContent')
      }
    }
  }

  const observer = new MutationObserver(callback)
  observer.observe(targetNode, config)


// Ajouter Dynamiquement les Brands au filtre select
  createBrandSelection(defaultsItem)