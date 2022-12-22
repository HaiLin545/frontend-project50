
const nums = document.querySelector('#nums');
const go = document.getElementById('go');
const count = document.getElementById('count');
const replay = document.getElementById('btn');


function countdown(n) {
    if (n == -1) {
        nums.innerHTML = '';
        count.style.display = 'none';
        go.style.display = 'block';
        return;
    }
    let num = document.createElement('div');
    num.innerText = n;
    nums.appendChild(num);
    setTimeout(() => {
        countdown(n - 1);
    }, 1000);
}

countdown(3);

replay.addEventListener('click', () => {
    go.style.display = 'none';
    count.style.display = 'block';
    countdown(3);
})