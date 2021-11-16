
const smalls = document.querySelectorAll('.small')
const empty = document.querySelector('.empty')
const full = document.querySelector('.full')
const remain = document.querySelector('.remain')
const water = document.querySelector('.water')

var cnt = 0

smalls.forEach((small, index) => {
    small.addEventListener('click', () => {
        draw(index)

    })
})


function draw(idx) {
    // console.log(cnt, idx)
    if (cnt == idx + 1) {
        smalls[idx].classList.remove('selected')
        cnt--
    }

    else {
        for (let i = idx + 1; i < smalls.length; i++) {
            smalls[i].classList.remove('selected')
        }

        for (let i = 0; i <= idx; i++) {
            smalls[i].classList.add('selected')
        }
        cnt = idx + 1;
    }
    a = cnt * 100 / 8 + "%"
    b = (1 - cnt / 8) * 100 + "%"
    full.style.height = a
    empty.style.height = b
    remain.innerText = 2 - cnt * 0.25 + "L"
    water.innerText = cnt * 100 / 8 + "%"

}