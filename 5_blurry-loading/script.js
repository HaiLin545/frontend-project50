

const bg = document.querySelector('.bg')
const text = document.querySelector('.loading-text')


window.addEventListener('load', () => {
    bg.classList.add('load')
    text.classList.add('load')
    let persent = 0
    let st = setInterval(() => {
        text.innerHTML = (persent++) + "%"
    }, 30)
    if (persent > 100) clearInterval(st)
})