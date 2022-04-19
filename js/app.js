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

// const navigateBtn = document.querySelectorAll('.navigation')
// const item = programsDiv.getElementsByClassName('item')
// navigateBtn.forEach(btn=>{
//     btn.addEventListener('click',()=>{
//         if(btn.classList.contains('next-btn')){
//             programsDiv.append(item[0])
//         } else if(btn.classList.contains('prev-btn')){
//             programsDiv.prepend(item[item.length - 1])
//         }
//     })
// })