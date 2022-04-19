const programs = [
    {
        poster: "./assets/images/png/DSC_9972 2.png",
        courseTitle: "Culinary",
        courseDescription: "Learn cooking, baking and drink making from experts",
        courseDuration: "Duration: 4months",
        category: "culinary"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (1).png",
        courseTitle: "Web Development",
        courseDescription: "A network focused on advancing and equipping ",
        courseDuration: "Duration: 4months",
        category: "tech"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (2).png",
        courseTitle: "Photograpy and Cinematography",
        courseDescription: "A network focused on advancing and equipping ",
        courseDuration: "Duration: 4months",
        category: "media"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (3).png",
        courseTitle: "Digital Marketing",
        courseDescription: "A network focused on advancing and equipping ",
        courseDuration: "Duration: 4months",
        category: "tech"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (1).png",
        courseTitle: "UI/UX Design",
        courseDescription: "A network focused on advancing and equipping",
        courseDuration: "Duration: 4months",
        category:   "tech"
    },
]

let count = 0
const row = document.querySelector('.row-container')
const courseHeader = document.querySelector('.course-header')

  const btnContainer = document.querySelector(".btn-container");
  const filterBtns = document.querySelectorAll(".filter-btn");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
        let displayMenu = programs.map(function (item) {
          // console.log(item);
      
          return `
          <div class="col-12 col-md-6 col-lg-4">
              <div class="prog-item">
                  <img class="img-fluid" src="${item.poster}" alt="">
                  <h5 class="course-title">
                      ${item.courseTitle}
                  </h5>
                  <p class="desc">
                      ${item.courseDescription}
                  </p>
                  <div class="course-duration d-flex align-items-center">
                      <span class="course-duration-icon">
                          <img src="./assets/images/png/eva_clock-fill.png" alt="duration">
                      </span>
                      ${item.courseDuration}
                  </div>
                  <button class="prog-cta w-100">
                      Register Now
                  </button>
              </div>
          </div>
          `;
        });
        displayMenu = displayMenu.join("");
        row.innerHTML = displayMenu;
    // diplayMenuItems(menuCategory);
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = programs.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        let current = document.getElementsByClassName('btn-active')
        current[0].className = current[0].className.replace(' btn-active')
        this.className += " btn-active";
        
      });
    });
   
    
  });
  
  
  
