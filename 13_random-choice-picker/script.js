const input = document.querySelector('textarea')
const options = document.querySelector('.options')

input.focus()

input.addEventListener('keyup', (e) => {
    createOptions(e.target.value)
    if (e.key === 'Enter') {
        randomSelect()
    }
})

function createOptions(string) {
    const tags = string.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    options.innerHTML = ''
    tags.forEach((tag) => {
        var ele = document.createElement('div')
        ele.classList.add('option')
        ele.innerText = tag
        options.appendChild(ele)
    })
}


function randomSelect() {
    const option = document.querySelectorAll('.option')
    if (option.length == 0) return
    let epoch = 10
    var time = 200
    var interval = setInterval(() => {
        let pos = Math.floor(Math.random() * (option.length))
        select(pos)
        epoch--
        if (epoch == 0) clearInterval(interval)
    }, time)
}

function select(i) {
    const option = document.querySelectorAll('.option')
    option.forEach((o) => {
        o.classList.remove('select')
    })
    option[i].classList.add('select')
}