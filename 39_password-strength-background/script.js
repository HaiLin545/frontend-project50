const pwd = document.getElementById('pwd');
const bg = document.querySelector('.background');

pwd.addEventListener('input', (e) => {
    let length = pwd.value.length;
    bg.style.filter = `blur(${20 - 2 * length}px)`;
})