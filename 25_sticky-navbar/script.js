const header = document.querySelector('header')

window.addEventListener('scroll',()=>{
    if(window.scrollY > window.innerHeight * 0.5){
        header.classList.add('changed')
    }else {
        header.classList.remove('changed')
    }
})