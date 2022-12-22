// const img = document.querySelector('img');
const container = document.querySelector("#container");
const timer = document.querySelector("#counter");

var cnt = 0;

container.addEventListener("dblclick", (e) => {
    // console.log('dbclick');
    var heart = document.createElement("i");
    heart.classList.add("fa");
    heart.classList.add("fa-heart");
    heart.classList.add("heart");
    heart.style.top = `${e.offsetY}px`;
    heart.style.left = `${e.offsetX}px`;
    // console.log(e.offsetX, e.offsetY);
    container.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 1000);
    timer.innerHTML = ++cnt;
});
