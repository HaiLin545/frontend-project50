const box = document.querySelector(".box");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${unsplashURL}${getRandomSize()}`;
    box.appendChild(img);
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
}
