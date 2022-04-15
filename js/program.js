// import { programs } from "./programs.js"
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

//search input js
const inputSearch = document.getElementById('search')
const searchIcon = document.querySelector(".search-icon")
inputSearch.addEventListener('focus', function(){
        searchIcon.classList.add('d-none')
    })
inputSearch.addEventListener('blur', function(){
    searchIcon.classList.remove("d-none")
        
    })
    //subscribe input js
const subscribe = document.getElementById('subscribe')
const subscribeBorder = document.querySelector(".sub-input")
const subscribeBtn = document.querySelector(".subscribe-btn")
const subscribeText = document.querySelector(".sub-text")
subscribe.addEventListener('focus', function(){
        subscribeBorder.style.borderColor = "#FFA800";
    })
subscribe.addEventListener('focus', function(){
    })
    subscribe.addEventListener('blur', function(){
        subscribeBorder.style.borderColor = "#f8f8f8";
        
    })

// program js
