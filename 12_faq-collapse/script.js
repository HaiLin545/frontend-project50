
const icons = document.querySelectorAll('.icon')
const faqs = document.querySelectorAll('.faq')


icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        faqs[index].classList.toggle('show')
    })
})
