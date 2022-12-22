const open = document.getElementById("open");
const close = document.getElementById("close");
const circle = document.querySelector(".circle");
const nav = document.querySelector("nav");
const lis = document.querySelectorAll("li");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
    container.classList.add("rotate");
    circle.classList.add("rotate");
    setTimeout(() => {
        nav.classList.add("rotate");
        lis.forEach((li) => {
            li.classList.add("rotate");
        });
    }, 500);
    // console.log(lis);
});

close.addEventListener("click", () => {
    nav.classList.remove("rotate");
    lis.forEach((li) => {
        li.classList.remove("rotate");
    });
    container.classList.remove("rotate");
    circle.classList.remove("rotate");
});
