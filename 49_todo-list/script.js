const input = document.getElementById("input");
const list = document.querySelector(".list");

list.oncontextmenu = function (e) {
    e.preventDefault();
};

getStorage();

input.addEventListener("change", (e) => {
    const item = document.createElement("li");
    item.innerText = e.target.value;
    item.classList.add("todo-item");
    item.addEventListener("mousedown", (e) => {
        const botton = e.button;
        if (botton == 0) {
            // 左键
            item.classList.toggle("delete");
        } else if (botton == 2) {
            // 右键
            list.removeChild(item);
        }
        setStorage();
    });
    list.appendChild(item);
    setStorage();
    e.target.value = "";
});

function setStorage() {
    const items = document.querySelectorAll(".todo-item");
    const todos = [];
    items.forEach((todo) => {
        todos.push({
            name: todo.innerText,
            deleted: todo.classList.contains("delete"),
        });
    });
    // console.log("set storage", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getStorage() {
    try {
        const todos = JSON.parse(localStorage.getItem("todos"));
        // console.log("get storage", todos);
        todos.forEach((todo) => {
            const item = document.createElement("li");
            item.innerText = todo.name;
            item.classList.add("todo-item");
            if (todo.deleted) {
                item.classList.add("delete");
            }
            item.addEventListener("mousedown", (e) => {
                const botton = e.button;
                if (botton == 0) {
                    item.classList.toggle("delete");
                } else if (botton == 2) {
                    list.removeChild(item);
                }
            });
            list.appendChild(item);
        });
    } catch (e) {
        console.log(e);
    }
}
