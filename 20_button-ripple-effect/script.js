const btn = document.querySelector('.btn')

btn.addEventListener("click", (e) => {
    const x = e.clientX
    const y = e.clientY
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const ripple = document.createElement('span')
    ripple.classList.add('circle')
    ripple.style.top = yInside + 'px'
    ripple.style.left = xInside + 'px'
    btn.appendChild(ripple)
    setTimeout(() => { btn.removeChild(ripple) }, 1000)
})