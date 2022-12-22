import fs from "fs";
import http from "http";

function getFolders() {
    const root = "../";
    let folders = fs
        .readdirSync(root)
        .filter((name) => name.includes("_"))
        .map((name) => {
            const tmp = name.split("_");
            const proj = tmp[1].split("-").join(" ");
            return {
                id: Number(tmp[0]),
                name: proj,
                folder: name,
            };
        })
        .sort((a, b) => {
            return a.id - b.id;
        });
    return folders;
}
// console.log(folders);
const server = http.createServer();
server.listen(8545, () => {
    console.log("服务器启动成功，端口8545.");
});

server.on("request", (req, res) => {
    console.log(req.url);
    res.setHeader("Access-Control-Allow-Origin", "*"); // 设置可访问的源
    res.setHeader("content-type", "application/json");
    const folders = getFolders();
    res.end(JSON.stringify(folders));
});
