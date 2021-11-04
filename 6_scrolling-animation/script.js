
const boxs = document.querySelectorAll('.box')


window.addEventListener('scroll', () => {

    var x = window.innerHeight * 4 / 5

    boxs.forEach(box => {
        let t = box.getBoundingClientRect().top
        if (t < x) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

})