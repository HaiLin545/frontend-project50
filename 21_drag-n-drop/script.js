const fill = document.querySelector(".fill");
const emptys = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", () => {
    console.log("dragstart");
    fill.className += " hold";
    setTimeout(() => {
        fill.className = "inivisable";
    }, 0);
});

fill.addEventListener("dragend", () => {
    console.log("dragend");
    fill.className = "fill";
});

emptys.forEach((empty) => {
    empty.addEventListener("dragover", (e) => {
        e.preventDefault();
        console.log("dragover");
    });
    empty.addEventListener("dragenter", (e) => {
        e.preventDefault();
        empty.classList.add("hovered");
        console.log("dragenter");
    });
    empty.addEventListener("dragleave", () => {
        empty.classList.remove("hovered");
        console.log("dragleave");
    });
    empty.addEventListener("drop", () => {
        empty.classList.remove("hovered");
        empty.append(fill);
        console.log("drop");
    });
});
