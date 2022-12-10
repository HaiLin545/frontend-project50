const range = document.getElementById("range");
const value = document.getElementById("value");
const left = range.offsetLeft;
const width = range.offsetWidth;
const max = Number(range.max);
const min = Number(range.min);
const len = max - min;
update(range.value);

range.addEventListener("input", (e) => {
    update(e.target.value);
});

function update(v) {
    let ratio = (v - min) / len;
    let dis = width * ratio;
    value.style.left = dis + "px";
    value.innerText = v;
}
