const header = document.querySelector(".card-header")
const title = document.querySelector(".card-title")
const content = document.querySelector(".card-excerpt") 
const profile = document.querySelector('.profile-img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')

setTimeout(loadData, 2000)

function loadData(){
    header.innerHTML = `<img src='./littleprince.jpg' alt="background-img">`
    title.innerText = 'The Litter Prince Is A Nice Book'
    content.innerHTML = `<span>This is the story of a grown-up meeting his inner child, embodied by a Little Prince. Traveling from an asteroid, he left his rose there to discover the world. Before landing on Earth he visited many planets and their inhabitants where all grown-ups incarnates humankind's most common vice. When a fox tell him that the eyes are blind and we are responsible forever for what you tame, the Little Prince go back home to meet again with his Rose.</span>`
    profile.style.backgroundImage = `url(./profile.jpg)` 
    profile.classList.remove('animated-bg')
    name.classList.remove('animated-bg')
    date.classList.remove('animated-bg')
    title.classList.remove('animated-bg')
    name.innerText = "Hailin"
    date.innerText = "2021/12/11"
}