const testimonials = [
    {
        name: "Miyah Myles",
        position: "Marketing",
        photo: "./imgs/1.jpg",
        text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    },
    {
        name: "June Cha",
        position: "Software Engineer",
        photo: "./imgs/2.jpg",
        text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
    },
    {
        name: "Iida Niskanen",
        position: "Data Entry",
        photo: "./imgs/3.jpg",
        text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
    {
        name: "Renee Sims",
        position: "Receptionist",
        photo: "./imgs/4.jpg",
        text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    },
    {
        name: "Jonathan Nunfiez",
        position: "Graphic Designer",
        photo: "./imgs/5.jpg",
        text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
    },
    {
        name: "Sasha Ho",
        position: "Accountant",
        photo: "./imgs/6.jpg",
        text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
    },
    {
        name: "Veeti Seppanen",
        position: "Director",
        photo: "./imgs/7.jpg",
        text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
    },
];

const intro = document.querySelector(".intro");
const avatar = document.querySelector(".avatar");
const name = document.querySelector(".name");
const position = document.querySelector(".position");
const bar = document.querySelector(".progress-bar");

let idx = 0;

change(idx);

function change(idx) {
    intro.innerText = testimonials[idx].text;
    name.innerText = testimonials[idx].name;
    position.innerText = testimonials[idx].position;
    avatar.src = testimonials[idx].photo;
}

const interval = 8000;

setInterval(() => {
    idx++;
    if (idx == testimonials.length) {
        idx = 0;
    }
    change(idx);
}, interval);
