const playBtn = document.getElementById('playBtn')
const vid = document.querySelector('.vid')
const overlay = document.querySelector('.overlay-play')

    playBtn.addEventListener('click',()=>{
        vid.play()
        if(vid.play()){
            overlay.classList.add('d-none')
            vid.setAttribute("controls", "controls")
        }
    })

    vid.addEventListener('ended',(e)=>{
        vid.removeAttribute("controls")
        overlay.classList.remove('d-none')
    })