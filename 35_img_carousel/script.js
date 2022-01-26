const container = document.getElementsByClassName('img-container')[0];
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

var idx = 0;
var n = 4;

function run() {
    idx++;
    if (idx == 4) idx = 0;
    container.style.transform = `translateX(${-idx * 100}%)`;
}

var timer = setInterval(run, 2000);

prev.addEventListener('click', () => {
    idx--;
    if (idx == -1) {
        idx = 3;
    }
    container.style.transform = `translateX(${-idx * 100}%)`;
    clearInterval(timer);
    timer = setInterval(run, 2000);
});

next.addEventListener('click', () => {
    run();
    clearInterval(timer);
    timer = setInterval(run, 2000);
});

