
const div = document.querySelector('.container')


window.addEventListener('keydown', (event) => {
    div.innerHTML = `
    <div class="tip">${event.key === ' ' ? 'Space' : event.key}<small>event.key</small></div>
    <div class="tip">${event.keyCode}<small>event.keyCode</small></div>
    <div class="tip">${event.code}<small>event.code</small></div>`
})