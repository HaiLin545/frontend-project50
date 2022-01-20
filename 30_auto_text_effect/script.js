
const word = "I Love Programming? No!";
const h1 = document.querySelector('h1');
const btn = document.querySelector('#speed');
let idx = 0;
let speed = 300 / btn.value;
typing();

function typing() {
    h1.innerText = word.slice(0, ++idx);
    if (idx >= word.length) idx = 0;
    setTimeout(typing, speed);
}


btn.addEventListener('change', (e) => {

    console.log(e.target.value);
    speed = 300 / e.target.value;
})

