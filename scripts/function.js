import { allItemsTablesNames } from "../src/productsNameFile.js"

/**
 * 
 * @param {Object} list 
 */
export function createBrandSelection (list) {
  const brandSelect = document.querySelector('#brand-select')
  brandSelect.innerHTML = ''
  const allOptions = document.createElement('option')
  allOptions.innerText = 'All'
  allOptions.setAttribute('value', 'All')
  brandSelect.appendChild(allOptions)
  
  const uniqueBrands = new Set();

  list.forEach(item => {
    if (item.brand) {
      uniqueBrands.add(item.brand)
    }
  })
  uniqueBrands.forEach(brandValue => {
    const createOption = document.createElement('option')
    createOption.innerText = brandValue
    createOption.setAttribute('value', brandValue)
    brandSelect.appendChild(createOption)
  })
}
export function createBrandSelectionForTableChart (list) {
  const brandSelect = document.querySelector('#brand-select')
  brandSelect.innerHTML = ''
  const allOptions = document.createElement('option')
  
  allOptions.innerText = list.brand
  allOptions.setAttribute('value', list.brand)
  brandSelect.appendChild(allOptions)
}

export function filterProducts(products, categories, searchText) {
  return products.filter(product => {
    // Vérifier si la catégorie du produit est dans les catégories sélectionnées
    const categoryMatch = categories.length === 0 || categories.includes(product.category);

    // Vérifier si le nom du produit contient le texte recherché
    const searchMatch = !searchText || 
    product.Nom.toLowerCase().includes(searchText.toLowerCase())
    || 
    product.categories.toLowerCase().includes(searchText.toLowerCase());

    // Retourner true seulement si les deux conditions sont remplies
    return categoryMatch && searchMatch;
  });
}

export function filterBrands(products, searchText) {
  return products.filter(product => {

    // Vérifier si le nom du produit contient le texte recherché
    const searchBrandsMatch = !searchText || 
    product.brand.includes(searchText);

    // Retourner true seulement si les deux conditions sont remplies
    return searchBrandsMatch;
  });
}

export function verifyContent (listOfItems) {
  if (listOfItems.length === 0) {
    const noContentFound = document.createElement('div')
    noContentFound.classList.add('noContentFound')
    
    const imageNoContentFound = document.createElement('img')
    imageNoContentFound.setAttribute('src', '../images/Background/no-result-search.svg')
    imageNoContentFound.setAttribute('alt', 'No Content Found')
    const textNoContentFound = document.createElement('h2')
    const commentNoContentFound = document.createElement('h3')
    textNoContentFound.innerText = 'No Content Found'
    commentNoContentFound.innerText = 'Adjust your filter for better results using one filter per search before apply.'

    noContentFound.appendChild(imageNoContentFound)
    noContentFound.appendChild(textNoContentFound)
    noContentFound.appendChild(commentNoContentFound)
    main.appendChild(noContentFound)
  } else {
    createMainHTMLItem(listOfItems)
  }
}

export function verifySearchContent (listOfItems) {
  if (listOfItems.length === 0) {
    voidSearch()
  } else {
    createMainHTMLItem(listOfItems)
  }
}
export function voidSearch () {
  const noContentFound = document.createElement('div')
  noContentFound.classList.add('noContentFound')
  
  const imageNoContentFound = document.createElement('img')
  imageNoContentFound.setAttribute('src', '../images/Background/no-result-search.svg')
  imageNoContentFound.setAttribute('alt', 'No Content Found')
  const textNoContentFound = document.createElement('h2')
  const commentNoContentFound = document.createElement('h3')
  textNoContentFound.innerText = 'No Content Found'
  commentNoContentFound.innerText = 'Adjust your filter for better results using one filter per search before apply.'
  

  noContentFound.appendChild(imageNoContentFound)
  noContentFound.appendChild(textNoContentFound)
  noContentFound.appendChild(commentNoContentFound)
  main.appendChild(noContentFound)
  noContentFound.appendChild(imageNoContentFound)
  noContentFound.appendChild(textNoContentFound)
  noContentFound.appendChild(commentNoContentFound)
  main.appendChild(noContentFound)
}


export function convertTableUnits() {
  const tableContainer = document.getElementById('tableContainer');
  const table = tableContainer.querySelector('table');
  if (!table) return console.log('NO TABLE');

  const theadRow = table.querySelector('thead tr');
  const tbodyRows = table.querySelectorAll('tbody tr');

  if (!theadRow || !tbodyRows.length) return console.log('f around');

  // Sélectionner les cellules d'en-tête (th) correctement
  const headers = Array.from(theadRow.querySelectorAll('td')).map(th => th.textContent);

  headers.forEach((header, index) => {
    if (header.includes('(Inches)')) {
      // Remplacer "(Inches)" par "(cm)" dans l'en-tête
      theadRow.querySelectorAll('td')[index].textContent = header.replace('(Inches)', '(cm)');
      tbodyRows.forEach(row => {
        const cell = row.querySelectorAll('td')[index];

        if (cell) {
          const inchesValue = parseFloat(cell.textContent);
          if (!isNaN(inchesValue)) {
            cell.textContent = (inchesValue * 2.54).toFixed(2); // Convert to cm
          }
        }
      });
    } else if (header.includes('(cm)')) {
      // Si on veut aussi la logique inverse (cm vers inches)
      theadRow.querySelectorAll('td')[index].textContent = header.replace('(cm)', '(Inches)');
      tbodyRows.forEach(row => {
        const cell = row.querySelectorAll('td')[index];

        if (cell) {
          const cmValue = parseFloat(cell.textContent);
          if (!isNaN(cmValue)) {
            cell.textContent = (cmValue / 2.54).toFixed(2); // Convert to inches
          }
        }
      });
    }
  });

  // Ajouter de l'animation au changement des unités dans la table
    
    const config = {
      characterData: true,
      subtree: true,
      characterDataOldValue: true
    };
    const callback = function(mutationsList, observer) {

      for (const mutation of mutationsList) {
        console.log("Type de mutation :", mutation.type);
        console.log("Nœud cible de la mutation :", mutation.target);
        console.log("Parent du nœud cible :", mutation.target.parentNode);
        
        if (mutation.type === 'characterData' && mutation.target.parentNode.tagName === 'TD') {
        // Appliquer une classe d'animation à la cellule (<td>) qui a changé
        const cell = mutation.target.parentNode;
        cell.classList.add('animateToggleTable');
        
        void cell.offsetWidth

        // Supprimer la classe d'animation après un court délai
        setTimeout(() => {
          cell.classList.remove('animateToggleTable');
        }, 300); // Durée de l'animation en millisecondes
        }
      }
    };

    const observer = new MutationObserver(callback);

    // Observer le conteneur de la table (ou le tbody si c'est plus spécifique)
    const targetNode = tableContainer.querySelector('tbody'); // Cibler le tbody pour plus de précision

    if (targetNode) {
      observer.observe(targetNode, config);
    }
}

/**
 * ADD THE ITEM TABLE TO THE DOM
 * @returns {HTMLElement}
 */
export function addTableToHTML (tablePath) {
  const tableContainer = document.getElementById('tableContainer')
  tableContainer.innerHTML = ''; // Clear previous content
  const callTable = document.getElementById('tableContainer')
  const table = document.createElement('table')
  table.classList.add('table')
  const thead = document.createElement('thead')
  const tbody = document.createElement('tbody')
  let csvDataArray = [];
  
  // ...
if (!tablePath) {
    alert('Table path is invalid');
} else {
    fetch(tablePath)
    .then(response => {
        if (!response.ok) {
            callTable.innerHTML = '';
            callTable.classList.add('tableNotFound');

            const nameOfItem = createItemFromFileName(tablePath).Name;
            const nameMissingItem = document.createElement('p');
            nameMissingItem.textContent = `Table not found: ${nameOfItem}`;
            nameMissingItem.style.fontSize = '20px';
            nameMissingItem.style.color = 'gray';

            const message = document.createElement('p');
            message.style.color = 'gray';
            message.style.fontSize = '14px';
            message.textContent = 'Sorry the table didn\'t load well. Please we\'re working on it';

            const notFoundSvg = document.createElement('img');
            notFoundSvg.style.opacity = '0.5';

            // Le chemin de l'image est peut-être incorrect, vérifie-le
            notFoundSvg.src = '../images/Background/table_NotFound.svg';
            notFoundSvg.alt = 'Table Not Found';

            callTable.appendChild(notFoundSvg);
            callTable.appendChild(nameMissingItem);
            callTable.appendChild(message);

            // Je lève une erreur pour arrêter la chaîne de promises
            throw new Error('Network response was not ok');
        }
        
        return response.text();
    })
    .then(data => {
        const csvDataArray = processCSV(data);
        
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        if (csvDataArray.length > 0) {
            const caption = document.createElement('caption');
            caption.innerText = `${createItemFromFileName(tablePath).Describe}`;
            const tr = document.createElement('tr');
            const column = Object.keys(csvDataArray[0]);

            column.forEach(columText => {
                const td = document.createElement('td');
                td.textContent = columText;
                tr.appendChild(td);
            });
            
            table.appendChild(caption);
            thead.appendChild(tr);
            table.appendChild(thead);
            
            csvDataArray.forEach(item => {
                const row = document.createElement('tr');
                column.forEach(key => {
                    const cell = document.createElement('td');
                    cell.textContent = item[key];
                    row.appendChild(cell);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);
            callTable.appendChild(table);
        } else {
            const lostData = document.createElement('p');
            lostData.textContent = 'No data';
            table.appendChild(lostData);
            callTable.appendChild(table);
        }
    })
    .catch(error => {
        console.error('Erreur lors de la lecture du fichier CSV:', error);
    });
}
}


/**
 * 
 * Clean and arrange the CSV
 * @param {*} csvString 
 * @returns 
 */
function processCSV(csvString) {
  const lines = csvString.trim().split('\n');
  const headers = lines[0].split(',');
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const row = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j].trim()] = values[j].trim();
    }
    data.push(row);
  }
  return data; // La fonction processCSV retourne le tableau de données
}


/**
 * CREATE ITEM FROM FILE NAME
 */

function createItemFromFileName (nameCsvFile,imagesFolder) {
  const nomBase = nameCsvFile.replace('-sizes.csv','')
  const parts = nomBase.split('-')
  const repoName = 'A-Fashion-Code-Source'
  const categories = capitalize(parts[0])
  const brand = capitalize(parts [1])
  const nameBrief = capitalize(parts.slice(2,-1).join('-'))
  const gender = capitalize(parts[parts.length - 1])

  const imageOffUrl = "../images/Background/image_Off.svg"

  const id = nomBase;
  const nameArticle = `${nameBrief} ${gender}`;
  const imageLink = `../images/${imagesFolder}/${gender}/${nomBase}.png`;
  return {
    Id: id,
    Nom: nameArticle,
    categories: categories.toUpperCase(),
    Gender: gender,
    brand: brand.toUpperCase(),
    Image: imageLink,
    Describe: nameBrief,
    Table: `../data/${nameCsvFile}`,
    imageNotFound: imageOffUrl
  }
}

export function recreateItemFromID (nameCsvFile,imagesFolder) {
  const tablePath = nameCsvFile + '-sizes.csv'
  const repoName = 'A-Fashion-Code-Source'
  const nomBase = tablePath.replace('-sizes.csv','')
  const parts = nomBase.split('-')
  const categories = capitalize(parts[0])
  const brand = capitalize(parts [1])
  const nameBrief = capitalize(parts.slice(2,-1).join('-'))
  const gender = capitalize(parts[parts.length - 1])

  const id = nomBase
  const nameArticle = `${nameBrief} ${gender}`
  const imageLink = `images/${imagesFolder}/${gender}/${nomBase}.png`

  return {
    Id: id,
    Nom: nameArticle,
    categories: categories.toUpperCase(),
    Gender: gender,
    brand: brand.toUpperCase(),
    Image: imageLink,
    Describe: nameBrief,
    Table: `../data/${tablePath}`
  }
}


function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}


/**
 * CREATE LIST OF ITEMS
 */

function createListOfItems (tables) {
  const listOfItems = []
  tables.forEach(itemTable => {
    const newItem = createItemFromFileName(itemTable, 'Assets')
    listOfItems.push(newItem)
  })
  return listOfItems
}


/**
 * 
 * CREATE HTML ELEMENT FOR THE ITEM
 */
export function createMainHTMLItem(listOfItems) {
  const container = document.getElementById('main');

  container.innerHTML = ''
  listOfItems.forEach(item => {
    const div = document.createElement('div');

    div.classList.add('itemMain');
    div.setAttribute('id', item.Id);

    const divImage = document.createElement('div');
    divImage.classList.add('lurreMain');

    const ItemImage = document.createElement('div');
    ItemImage.classList.add('itemDivImage');
    ItemImage.setAttribute('alt', item.Nom);
    
    divImage.appendChild(ItemImage);
    
    const divInfo = document.createElement('div');
    divInfo.classList.add('infoMain');
    divInfo.innerHTML = `
    <h4>${item.Describe}</h4>
    <h5>${item.categories}</h5>
    <button onclick="window.location.href='../html/sizeChart.html?id=${item.Id}';">See Chart</button>
    `;
    div.appendChild(divImage);
    div.appendChild(divInfo);
    container.appendChild(div);
    
    
    getRequestImages(item,ItemImage);
  });
}

export function createHTMLCarrouselItemTables(listOfItems) {
  const container = document.getElementById('carouselContainer');
  
  const prevButton = document.createElement('button');
  prevButton.classList.add('arrow-left');
  prevButton.addEventListener('click', () => {
    const element = document.getElementById('tableContainer')
    element.classList.add("animateTable")

    element.addEventListener( 'animationend', () => {
      element.classList.remove('animateTable')
    } )
  })
  container.appendChild(prevButton);
  listOfItems.forEach(item => {

    const lurre = document.createElement('div');
    lurre.classList.add('first')
    
    const ItemImage = document.createElement('div');
    ItemImage.classList.add('first-img');
    ItemImage.setAttribute('alt', item.Nom);
    ItemImage.style.background = `no-repeat center center / contain url(${item.Image})`;
    getRequestImages(item);
    lurre.appendChild(ItemImage);
    container.appendChild(lurre);
  });

  const nextButton = document.createElement('button');
  nextButton.classList.add('arrow-right');
  nextButton.addEventListener('click', () => {
    console.log('animate')
    const element = document.getElementById('tableContainer')
    element.classList.add("animateTable")

    element.addEventListener( 'animationend', () => {
      element.classList.remove('animateTable')
    } )
  })
  container.appendChild(nextButton);
}



export function createCarrouselItems(listOfItems, idContainer) {
  const container = document.getElementById(idContainer);
  container.innerHTML = ''
  
  listOfItems.forEach(item => {

    const divImage = document.createElement('div');
    divImage.classList.add('item1');

    const lurreContainer = document.createElement("div")
    lurreContainer.classList.add('lurre')

    const itemImage = document.createElement('div');
    itemImage.classList.add('itemImg');
    itemImage.setAttribute('alt', item.Nom);
    itemImage.style.background = `no-repeat center center / contain url(${item.Image})`;
    getRequestImages(item);

    lurreContainer.appendChild(itemImage);

    const info = document.createElement('div')
    info.classList.add('info')

    const itemName = document.createElement('h4')
    const itemCategory = document.createElement('h5')
    const itemButton = document.createElement('button')
    itemName.innerText = `${item.Describe}`
    itemCategory.innerText = `${item.categories}`
    itemButton.innerText = 'See Chart'
    itemButton.setAttribute('id', 'itemButton')
    itemButton.addEventListener('click', () =>{
      window.location.href=`../html/sizeChart.html?id=${item.Id}`
    })

    info.appendChild(itemName)
    info.appendChild(itemCategory)
    info.appendChild(itemButton)

    divImage.appendChild(lurreContainer)
    divImage.appendChild(info)
    container.appendChild(divImage);
  });
  
  $(document).ready(function() {
    $('.miniCarousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
    });

    const nextButton = $('.arrow-right')
    const prevButton = $('.arrow-left')

    prevButton.on('click', function () {
      $('.miniCarousel').slick('slickPrev')
    })
    nextButton.on('click', function () {
      $('.miniCarousel').slick('slickNext')
    })
  })
}


/**
 *  LIST OF CSV DATA NAMES
*/

export function asssignActiveClass () {
  const currentPagePath = window.location.pathname;

  //Extraire juste le nom du fichier ("page.html")
  const currentPageFileName = currentPagePath.substring(currentPagePath.lastIndexOf('/') + 1);
  
  const navLinks = document.querySelectorAll('.nav-links');
  navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      const linkFileName = linkPath.substring(linkPath.lastIndexOf('/') + 1);

      if (linkFileName === currentPageFileName) {
        link.classList.add('active-nav');
      } else {
        link.classList.remove('active-nav');
      }
  });
}

/**
 * CREATE A LIST OF ITEMS OBJECTS TO DISPLAY
 * @param {array} allItemsObjects 
 * @param {number} count 
 * @returns 
 */
export function getRandomItems(allItemsObjects, count) {
  const shuffled = [...allItemsObjects].sort(() => 0.5 - Math.random()); 
  return shuffled.slice(0, count);
}

/**
 * LIST OF ALL ITEMS OBJECTS
 */
export const allItemsObjects = createListOfItems(allItemsTablesNames)

export const randomItems = getRandomItems(allItemsObjects,26);


function getRequestImages(item, ItemImage) {
  if (!item) {
    console.error(`L'élément '${item.Id}' est introuvable dans le DOM.`);
    return ;
  }
  return fetch(item.Image)
    .then(response => {
      if (response.ok) {
        ItemImage.style.background = `no-repeat center center / contain url(${item.Image})`;
      } else {
        ItemImage.style.background = `no-repeat center center / contain url(${item.imageNotFound})`;
      }
    })
}