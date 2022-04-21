const navigateBtn = document.querySelectorAll('.navigation')
const item = programsDiv.getElementsByClassName('item')
navigateBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('next-btn')){
            programsDiv.append(item[0])
        } else if(btn.classList.contains('prev-btn')){
            programsDiv.prepend(item[item.length - 1])
        }
    })
})