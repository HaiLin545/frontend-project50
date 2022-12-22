const box = document.querySelector(".box");

async function getFolders() {
    try {
        const res = await fetch("http://127.0.0.1:8545/");
        const folders = await res.json();
        // folders.forEach((f) => {
        //     box.appendChild(createProjItem(f));
        // });
        for (let i = 0; i < 50; i++) {
            box.appendChild(createProjItem(folders[i]));
        }
    } catch (e) {
        console.log(e);
    }
}

function createProjItem(folder) {
    const item = document.createElement("div");
    const frameBox = document.createElement("div");
    const iframe = document.createElement("iframe");
    const p = document.createElement("p");
    const mask = document.createElement("a");

    const targetUrl = `../${folder.folder}/index.html`;
    mask.classList.add("mask");
    mask.target = "_blank";
    mask.href = targetUrl;
    mask.addEventListener("click", (e) => {});
    mask.innerHTML = `
    <h2>${folder.id}</h2>
    <h2>${folder.name}<h2>
    <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>`;

    item.classList.add("proj-item");
    frameBox.classList.add("frame-box");

    p.innerText = `${folder.id} ${folder.name}`;
    iframe.src = targetUrl;

    frameBox.appendChild(iframe);
    frameBox.appendChild(mask);
    item.appendChild(frameBox);
    return item;
}

getFolders();
