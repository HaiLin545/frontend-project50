const start_btn = document.querySelector(".start-btn");
const container = document.querySelector(".container");
const insects = document.querySelectorAll(".insect");
const time = document.getElementById("time");
const score = document.getElementById("score");
const box = document.querySelector(".box");
const annoy = document.querySelector(".annoy-tip");

const imgs = [
    "./imgs/fly_PNG3946.png",
    "./imgs/mosquito_PNG18175.png",
    "./imgs/spider_PNG12.png",
    "./imgs/roach_PNG12163.png",
];

let tot_time = 0;
let tot_score = 0;

start_btn.addEventListener("click", (e) => {
    console.log("click start btn");
    container.classList.add("to-menu");
});

insects.forEach((item, idx) => {
    item.addEventListener("click", (e) => {
        container.classList.add("to-game");
        startGame(imgs[idx]);
    });
});

function startGame(src) {
    setTimeout(() => {
        setInterval(() => {
            updateTime();
        }, 1000);
        generate(src);
    }, 500);
}

function generate(src) {
    setInterval(() => {
        const f = Math.random();
        if (f > 0.6) {
            generateItem(src);
            generateItem(src);
        } else {
            generateItem(src);
        }
    }, 1000);
}

function generateItem(src) {
    const item = document.createElement("img");
    item.src = src;
    item.classList.add("score-item");
    item.style.top = `${Math.random() * 100}%`;
    item.style.left = `${Math.random() * 100}%`;
    item.style.transform = `rotate(${Math.random() * 360}deg)`;
    box.appendChild(item);
    item.addEventListener("click", (e) => {
        box.removeChild(item);
        updateScore();
        if (tot_score > 5) {
            annoy.classList.add("visible");
        }
    });
}

function updateTime() {
    tot_time++;
    time.innerText = formatTime(tot_time);
}

function updateScore() {
    tot_score += 1;
    score.innerText = tot_score;
}

function formatTime(time) {
    let h = String(Math.floor(time / 60));
    let m = String(time % 60);
    return align(h) + ":" + align(m);
}

function align(s) {
    if (s.length == 1) {
        return "0" + s;
    } else {
        return s;
    }
}

if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
}
