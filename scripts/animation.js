const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                {transform: 'translateX(-20px)', opacity: 0},
                {transform: 'translateX(0)', opacity: 1},
            ], {duration:400})
        }
    }
})
const observerReverse = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                {transform: 'translateX(20px)', opacity: 0},
                {transform: 'translateX(0)', opacity: 1},
            ], {duration:400})
        }
    }
})

const observerScale = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                {transform: 'scale(0.8)', opacity: 0},
                {transform: 'scale(1)', opacity: 1},
            ], {duration: 400})
        }
    }
})
const fadeIn = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                {opacity: 0},
                {opacity: 1},
            ], {duration: 400})
        }
    }
})
const moveIn = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            brandsLogo.forEach(logo => {
                logo.classList.add('animateLogo')
            })
            observer.unobserve(brands)
        }
    }) ,
    {
        threshold: 0.5
    }
})

const heading = document.querySelector('.heading')
const btnSection = document.querySelector('.cta')
const lastCta = document.querySelector('.lastCta')
const btnShowcase = document.querySelector('#cta')
const drawer = document.querySelector('.drawer')
const disblay = document.querySelector('.disblay')
const table = document.querySelector('.table')
const textServices = document.querySelector('.text')
const textExpert = document.querySelector('#textExpert')
const imageServices = document.querySelector('.eximage')
const imageExperience = document.querySelector('.chartimage')
const brands = document.querySelector('.brands')
const brandsLogo = document.querySelectorAll('.logoBrand')
const lastContent = document.querySelector('.lastContent')

observer.observe(heading)

/**SERVICES ANIMATION */
observer.observe(textServices)
observerReverse.observe(imageServices)
observer.observe(imageExperience)
observerReverse.observe(textExpert)

observerScale.observe(btnSection)
observerScale.observe(btnShowcase)
observerScale.observe(drawer)
fadeIn.observe(disblay)
observerScale.observe(table)

fadeIn.observe(brands)

observerScale.observe(lastCta)
fadeIn.observe(lastContent)