const pages = document.querySelectorAll(".page");
const showBtn = document.querySelector("navigator");
const closeBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", (e) => {
    pages.forEach((p, i) => {
        p.classList.add("show");
        p.style.transitionDelay = `${200 * i}ms`;
    });
});

closeBtn.addEventListener("click", (e) => {
    pages.forEach((p, i) => {
        p.classList.remove("show");
        p.style.transitionDelay = `${200 * (2 - i)}ms`;
    });
});
