
const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        var label = e.target.labels[0]
        label.classList.toggle('checked');
        const isGood = good.checked;
        const isCheap = cheap.checked;
        const isFast = fast.checked;
        if (isGood && isCheap && isFast) {
            if (toggle === good) {
                fast.checked = false;
                fast.labels[0].classList.toggle('checked');
            } else if (toggle === cheap) {
                good.checked = false;
                good.labels[0].classList.toggle('checked');
            } else {
                cheap.checked = false;
                cheap.labels[0].classList.toggle('checked');
            }
        }
    })
});