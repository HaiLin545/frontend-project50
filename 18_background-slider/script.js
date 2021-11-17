
bd = document.body

const btns = document.querySelectorAll('.btn')
const small = document.querySelector('.slider')
const left = btns[0]
const right = btns[1]


const imgs = [
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
    'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
]
var pos = 0

setImg(imgs[0])

left.addEventListener('click', () => {
    pos = (pos + imgs.length - 1) % imgs.length
    setImg(imgs[pos])
})

right.addEventListener('click', () => {
    pos = (pos + 1) % imgs.length
    setImg(imgs[pos])
})

function setImg(url) {
    bd.style.backgroundImage = `url(${url})`
    small.style.backgroundImage = `url(${url}`
}