const form = document.querySelector('form');
const length = document.querySelector('#length');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const number = document.querySelector('#number');
const sumbol = document.querySelector('#symbol');
const output = document.querySelector('#output');
const outputArea = document.querySelector('#outputArea');
const copyBtn = document.querySelector("#btn");


const generateMethods = [
    geneUpper,
    geneLower,
    geneNumber,
    geneSymbol
];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const len = length.value;
    const isUpper = uppercase.checked;
    const isLower = lowercase.checked;
    const isNumber = number.checked;
    const isSymbol = symbol.checked;
    var newPwd = generatePassword(len, isUpper, isLower, isNumber, isSymbol);
    outputArea.innerHTML = newPwd;
})

copyBtn.addEventListener('click', () => {
    let pwd = outputArea.innerHTML;
    if (!pwd) return;
    let txt = document.createElement('textarea');
    txt.value = pwd;
    document.body.appendChild(txt);
    txt.select();
    document.execCommand('copy');
    txt.remove();
    alert('Password copied to clipboard!')
})

function generatePassword(len, ...arr) {
    let types = 0;
    for (let i = 0; i < 4; i++)types += arr[i];
    if (types == 0) return '';
    let newPwd = '';
    let methods = generateMethods.filter((v, i) => arr[i]);
    while (newPwd.length < len) {
        newPwd += methods[Math.floor(Math.random() * methods.length)]();
    }
    return newPwd;
}


function geneUpper() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function geneLower() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function geneNumber() {
    return String.fromCharCode(48 + Math.floor(Math.random() * 10));
}

const symbols = '!@#$^&*()_+[]{}|.,;:';
function geneSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}