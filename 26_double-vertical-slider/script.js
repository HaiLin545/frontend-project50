

const leftSlider = document.querySelector('#left')
const rightSlider = document.querySelector('#right')

const downBtn = document.querySelector('#down')
const upBtn = document.querySelector('#up')

downBtn.addEventListener('click',()=>changeSlider('down'))
upBtn.addEventListener('click',()=>changeSlider('up'))
// console.log(leftSliders.length)

var activeSlider = 0

rightSlider.style.transform = 'translateY(-300%)'

function changeSlider(dir){
    if(dir=='down'){
        activeSlider++
        if(activeSlider>=4) activeSlider = activeSlider% 4
    }else if(dir=='up'){
        activeSlider--
        if(activeSlider<0)activeSlider = 3
    }
    leftSlider.style.transform=`translateY(-${activeSlider*100}%)`
    rightSlider.style.transform=`translateY(-${(3-activeSlider)*100}%)`
}

