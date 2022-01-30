const board = document.querySelector('.board');

const colors = ['#2dbe6a', '#3081b8', '#8e44ac', '#e34c3c', '#e67e22'];


for (let i = 0; i < 30 * 24; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseenter', () => {
        let color = colors[Math.floor(Math.random() * 5)];
        box.style.backgroundColor = color;
        box.style.transition = 'none';
        box.style.boxShadow = `0px 0px 2px ${color} , 0px 0px 10px ${color}`;
    });
    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = 'rgb(29, 29, 29)';
        box.style.boxShadow = `0px 0px 2px rgb(0, 0, 0)`;
        box.style.transition = '1500ms ease-out';
    })
    board.appendChild(box);
}

