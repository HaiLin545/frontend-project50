
const canvas = document.getElementById('draw')
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const clear = document.getElementById('clear')
const colorEl = document.getElementById('color')
const sizeEl = document.getElementById('size')
const ctx = canvas.getContext('2d')

var size = 10
var ispressed = false
console.log(colorEl.value)
var color = colorEl.value
var x
var y

canvas.addEventListener('mousedown', (e) => {
    ispressed = true
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mousemove', (e) => {
    if (ispressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

document.addEventListener('mouseup', (e) => {

    ispressed = false
    x = undefined
    y = undefined
})


function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2, 0)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineWidth = size * 2
    ctx.strokeStyle = color
    ctx.stroke()
}

increase.addEventListener('click', () => {
    size += 5
    if (size > 50) size = 50
    sizeEl.innerText = size
})

decrease.addEventListener('click', () => {
    size -= 5
    if (size <= 5) size = 5
    sizeEl.innerText = size
})

colorEl.addEventListener('change', (e) => {
    color = e.target.value
    console.log(color)
})

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

