let hamburger = document.querySelector(".hamburger")
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
// subscribe.addEventListener('focus', function(){
//         subscribeBorder.style.borderColor = "#FFA800";
//     })
// subscribe.addEventListener('focus', function(){
//     })
    // subscribe.addEventListener('blur', function(){
    //     subscribeBorder.style.borderColor = "#f8f8f8";
        
    // })

// program js
const programsDiv = document.querySelector('.programs')
// const programCont = document.querySelector('.program-cont')
// let programDisplay;
// programs.forEach(program=>{
//      programDisplay = document.createElement("div");
//     let card = document.createElement("div");
//     programDisplay.classList.add("col-12", "col-md-6", "col-lg-3")  
//     card.classList.add("card")  
//     card.innerHTML = `
//                     <img class=" program-poster" src="${program.poster}" alt="course-poster">
//                     <h5 class="course-title">
//                        ${program.courseTitle}
//                     </h5>
//                     <p class="course-description">
//                         ${program.courseDescription}
//                     </p>
//                     <div class="course-duration d-flex align-items-center">
//                         <span class="course-duration-icon">
//                             <img src="./assets/images/png/eva_clock-fill.png" alt="duration">
//                         </span>
//                         Duration: 4months
//                     </div>
//                     <button class="course-cta">
//                         Register
//                     </button>

//     `
//     programDisplay.appendChild(card)
//     programsDiv.appendChild(programDisplay)
// })


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

// Curriculum
const curriBtn = document.querySelectorAll(".btn-curriculum")
let curriDesc = document.querySelectorAll(".curriculum-desc")


curriDesc.forEach(desc=>{
    desc.substring(1,10)
})
let text = "Samosas, Spring Rolls, Puff Puff, Chin Chin, Buns, Shawarma, Egg rolls, Meat pie, Doughnut, Banana bread Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatibus temporibus, doloremque officiis commodi quia illo perferendis obcaecati quae laudantium eos. Dolor minus exercitationem impedit aspernatur modi repudiandae ea nulla, voluptates quae ut eligendi vitae omnis! Odit fugit commodi necessitatibus temporibus veniam vel, cupiditate illo impedit dicta ducimus corporis reiciendis."
let result = text.substring(0,200)
console.log(result);

const curriculums = [
    {
        
    }
]