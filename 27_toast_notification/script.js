const btn = document.getElementsByTagName('button')[0];
const nt = document.querySelector('.notifications');

btn.addEventListener('click', function () {
    addNotification(Math.floor(Math.random() * 10));
})



function addNotification(content) {
    let msg = "Message " + content;
    var newNotification = document.createElement('div');
    newNotification.classList.add('notification');
    nt.appendChild(newNotification);
    newNotification.innerHTML = msg;
    setTimeout(() => {
        nt.removeChild(newNotification);
    }, 5000);
}

