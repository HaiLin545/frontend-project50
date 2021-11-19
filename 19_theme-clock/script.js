
const ht = document.querySelector('html')
const mode = document.querySelector('.mode')
const sec = document.querySelector('.sec')
const min = document.querySelector('.min')
const hour = document.querySelector('.hour')
const tim = document.querySelector('.time')
const da = document.querySelector('.day')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

mode.addEventListener('click', () => {
    ht.classList.toggle('dark')
    if (bd.classList.contains('dark')) {
        mode.innerText = 'Light Mode'
    } else {
        mode.innerText = 'Dark Mode'
    }
})

updateTime()

function updateTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    hour.style.transform = `translateX(-50%) rotate(${360 * hoursForClock / 12 - 180}deg)`
    min.style.transform = `translateX(-50%) rotate(${360 * minutes / 60 - 180}deg)`
    sec.style.transform = `translateX(-50%) rotate(${360 * seconds / 60 - 180}deg)`
    tim.innerText = (hoursForClock < 10 ? "0" + hoursForClock : hoursForClock) + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + (hours >= 13 ? "PM" : "AM")
    da.innerHTML = `${days[day - 1]}, ${months[month - 1]}<span>${date}</span>`


}

setInterval(updateTime, 1000)

