const items = document.querySelectorAll(".bar-item");
const bar = document.querySelector(".bar");
const img = document.querySelector("img");

const img_urls = ["imgs/1.png", "imgs/2.png", "imgs/3.png", "imgs/4.png"];

var cur = 0;
img.src = img_urls[cur];
items[cur].classList.add("active");

items.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        if (cur == index) {
            return;
        } else {
            items[cur].classList.remove("active");
            cur = index;
            img.src = img_urls[cur];
            // console.log(img.src);
            item.classList.add("active");
        }
    });
});
