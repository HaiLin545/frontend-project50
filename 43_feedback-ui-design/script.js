const faces = document.querySelectorAll(".face");
const result = document.getElementById("feedback-result");
let active_idx = 2;

faces[active_idx].classList.add("active");

faces.forEach((item, idx) => {
    item.addEventListener("click", (e) => {
        if (idx != active_idx) {
            faces[active_idx].classList.remove("active");
            faces[idx].classList.add("active");
            active_idx = idx;
        }
    });
});

const btn = document.querySelector(".btn");
const before = document.querySelector(".before");
const after = document.querySelector(".after");

const texts = ["Unhappy", "Neutral", "Satisfied"];

btn.onclick = () => {
    before.classList.add("hide");
    after.classList.remove("hide");
    result.innerText = texts[active_idx];
};
