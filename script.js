

const accueil = document.querySelector('.accueil');

document.addEventListener('scroll', () => {
    let scrollPos = document.documentElement.scrollTop;
    // console.log(scrollPos);

    accueil.style.backgroundSize = `${100 + scrollPos / 10}%`;

})


const playSound = (e) => {
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) sounds[i].pause()
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(audio)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return
    // audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
}
const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)
