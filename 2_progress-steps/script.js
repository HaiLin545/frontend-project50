const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
// console.log(nextBtn);
const circles = document.querySelectorAll(".circle");
const colorlines = document.querySelectorAll(".colorline");
var step = 1;

prevBtn.addEventListener("click", clickPrev);
nextBtn.addEventListener("click", clickNext);

function clickNext() {
    if (step < 4) {
        circles[step].classList.add("active");
        colorlines[step - 1].classList.add("active");
        step++;
        if (step == 4) {
            nextBtn.disabled = true;
            nextBtn.classList.add("notclick");
        }
        if (step == 2) {
            prevBtn.disabled = false;
            prevBtn.classList.remove("notclick");
        }
    }
}

function clickPrev() {
    if (step > 1) {
        circles[step - 1].classList.remove("active");
        colorlines[step - 2].classList.remove("active");
        step--;
        if (step == 3) {
            nextBtn.disabled = false;
            nextBtn.classList.remove("notclick");
        }
        if (step == 1) {
            prevBtn.disabled = true;
            prevBtn.classList.add("notclick");
        }
    }
}
