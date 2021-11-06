
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const btns = document.querySelector('#buttons')
const audios = document.querySelectorAll('audio')

sounds.forEach(sound => {
    var btn = document.createElement('button')
    btn.classList.add('btn')
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })
    btn.innerText = sound
    btns.appendChild(btn)
})

function stopSongs() {
    audios.forEach(aud => {
        aud.pause()
        aud.currentTime = 0
    })
}