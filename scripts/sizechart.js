import { createCarrouselItems, randomItems,getRandomItems,addTableToHTML, convertTableUnits,createBrandSelectionForTableChart,recreateItemFromID } from "./function.js"


document.addEventListener('DOMContentLoaded', () => {
    function getIdFromURL () {
    const search = new URLSearchParams(window.location.search)
    return search.get('id')
    }

    const itemID = getIdFromURL()
    const item = recreateItemFromID(itemID, 'Asset')

    const itemLowerCarousel = getRandomItems(randomItems,26)
    createCarrouselItems(itemLowerCarousel, 'miniCarousel')

    function injectHTML (id) {
        const item = recreateItemFromID(id, 'Asset');
        const lurre = document.getElementById('itemImage');
        lurre.classList.add('itemImage')

        const itemCategory = document.getElementById('itemCategory');
        const itemName = document.getElementById('itemName');
        itemCategory.textContent = `Category: ${item.categories}`;
        itemName.textContent = `${item.Nom}`;

        const imageSized = document.createElement('div');
        imageSized.classList.add('itemImage')
        imageSized.setAttribute('alt', item.Nom);
        imageSized.style.background = `no-repeat center center / contain url(${item.Image})`;

        lurre.appendChild(imageSized);

        addTableToHTML(item.Table);
        console.log(item.Table)
    }

    injectHTML(itemID)

    createBrandSelectionForTableChart(item)

    document.querySelector('#units-select')
        .addEventListener('change', () => {
            convertTableUnits()
        })

    const describeA = document.querySelector('.describeTabA')
    const describeB = document.querySelector('.describeTabB')
    const describeAText = document.querySelector('.describe-content')
    const describeBText = document.querySelector('.howTomeasure-content')


    describeA.classList.add('active')
    describeBText.classList.add('hidden')

    describeA.addEventListener(('click'), () => {
        describeAText.classList.remove('hidden')
        describeAText.classList.add('view')
        describeBText.classList.add('hidden')
        describeBText.classList.remove('view')

        
        describeB.classList.remove('active')
        describeA.classList.add('active')
    })

    describeB.addEventListener(('click'), () => {
        describeBText.classList.remove('hidden')
        describeBText.classList.add('view')
        describeAText.classList.add('hidden')
        describeAText.classList.remove('view')
        
        describeA.classList.remove('active')
        describeB.classList.add('active')
    })

})

