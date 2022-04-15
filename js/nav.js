
const hamburger = document.querySelector(".hamburger")
const navLeft =  document.querySelector(".nav-left")
const cancelBtn =  document.querySelector(".cancel-btn")

hamburger.addEventListener('click', function(){
    navLeft.classList.add('show-links')
    hamburger.classList.add('d-none')
} )
cancelBtn.addEventListener('click', function(){
    navLeft.classList.remove('show-links')
    hamburger.classList.remove('d-none')
})
