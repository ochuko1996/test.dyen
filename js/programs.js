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
        courseTitle: "Frontend Development",
        courseDescription: "A network focused on advancing and equipping ",
        courseDuration: "Duration: 4months",
        category: "tech"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (2).png",
        courseTitle: "Photography and Cinematography",
        courseDescription: "A network focused on advancing and equipping ",
        courseDuration: "Duration: 4months",
        category: "media"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (2).png",
        courseTitle: "Video Editing",
        courseDescription: "A network focused on advancing and equipping ",
        courseDuration: "Coming Soon",
        category: "media"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (3).png",
        courseTitle: "Digital Marketing",
        courseDescription: "A network focused on advancing and equipping ",
        courseDuration: "Duration: 4months",
        category: "digital"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (3).png",
        courseTitle: "SEO",
        courseDescription: "A network focused on advancing and equipping ",
        courseDuration: "Duration: 4months",
        category: "digital"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (1).png",
        courseTitle: "UI/UX Design",
        courseDescription: "A network focused on advancing and equipping",
        courseDuration: "Duration: 4months",
        category:   "tech"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (1).png",
        courseTitle: "Backend Development",
        courseDescription: "A network focused on advancing and equipping",
        courseDuration: "Duration: 4months",
        category:   "tech"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (1).png",
        courseTitle: "Mobile Development",
        courseDescription: "A network focused on advancing and equipping",
        courseDuration: "Duration: 4months",
        category:   "tech"
    },
]
const courseHeading= [ "Dyen Programs","Dyen Tech programs","Dyen Media programs","Dyen Culinary programs", "Digital Marketing/Business"]
const row = document.querySelector('.row-container')
const courseHeader = document.querySelector('.course-header')

  const btnContainer = document.querySelector(".btn-container");
  const filterBtns = document.querySelectorAll(".filter-btn");
  let menuCategory;
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(programs);
  });
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
       menuCategory = programs.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(programs);
      } else {
        diplayMenuItems(menuCategory);
      }
      let current = document.getElementsByClassName('btn-active')
      current[0].className = current[0].className.replace(' btn-active')
      this.className += " btn-active";
      if(category === "tech"){
        courseHeader.textContent = courseHeading[1]
        // console.log('hi');
    }
      else if(category === "media"){
        courseHeader.textContent = courseHeading[2]
        // console.log('hi');
    } else if (category === "culinary") {
        courseHeader.textContent = courseHeading[3]
    } else if (category === "digital"){
        courseHeader.textContent = courseHeading[4]
      } else {
      courseHeader.textContent = courseHeading[0]

    }
    });
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `
      <div class="col-12 col-md-6 col-lg-4 mb-5">
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
    // console.log(displayMenu);
  
    row.innerHTML = displayMenu;
  }
  
