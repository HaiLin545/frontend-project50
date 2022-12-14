const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const label = ["a", "b", "c", "d"];
let res = [];

const q = document.querySelector(".question");
const answers = document.querySelector(".answers");
const ans = document.querySelectorAll(".ans-label");
const submit = document.querySelector(".submit-btn");
const radios = document.querySelectorAll(".ans-radio");

let idx = 0;

function setQuestion(idx) {
    q.innerText = quizData[idx]["question"];
    ans.forEach((a, i) => {
        a.innerText = quizData[idx][label[i]];
    });
}

function init() {
    submit.disabled = true;
    clearRadio();
    setQuestion(idx);
}

init();

submit.addEventListener("click", (e) => {
    idx++;
    if (idx == quizData.length) {
        res.push(getRes());
        showResult();
        submit.disabled = false;
    } else if (idx > quizData.length) {
        location.reload();
    } else {
        res.push(getRes());
        init();
    }
});

radios.forEach((r) => {
    r.addEventListener("change", (e) => {
        submit.disabled = false;
    });
});

function clearRadio() {
    radios.forEach((e) => {
        e.checked = false;
    });
}

function getRes() {
    let res = "";
    radios.forEach((e, i) => {
        if (e.checked) {
            res = label[i];
        }
    });
    return res;
}

function showResult() {
    let correctNum = 0;
    for (let i = 0; i < quizData.length; i++) {
        if (res[i] == quizData[i].correct) {
            correctNum++;
        }
    }
    q.innerText = `You answered ${correctNum}/4 questions correctly`;
    answers.style.display = "none";
    submit.innerText = "Reload";
}
