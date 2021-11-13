
const nums = document.querySelectorAll('.num')

const arr = [12000, 5000, 7500]

window.addEventListener('load', () => {
    nums.forEach((num, idx) => {
        var x = 0
        var si = setInterval(() => {
            x += arr[idx] / 100
            var innerText = x
            num.innerText = innerText
            if (innerText == arr[idx]) {
                clearInterval(si)
            }
        }, 10)
    })
})