const programs = [
    {
        poster: "./assets/images/png/DSC_9972 2.png",
        courseTitle: "Culinary",
        courseDescription: "Learn cooking, baking and drink making from experts",
        courseDuration: "Duration: 4months",
        category: "culinary",
        cta: "register",
        cardState: true,
        url:    "../culinary.html"
    },
    {
      poster: "./assets/images/png/DSC_9972 2 (1).png",
      courseTitle: "Frontend Development",
      courseDescription: "A network focused on advancing and equipping ",
      courseDuration: "Duration: 4months",
      category: "tech",
      cta: "register",
      cardState: true,
      url:    "../"
    },
    {
      poster: "",
      courseTitle: "Culinary",
      courseDescription: "coming soon coming soon coming soon coming soon coming soon ",
      courseDuration: "Coming soon",
      category: "culinary",
      cta: "Coming Soon",
      cardState: false ,
      url:    "../"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (2).png",
        courseTitle: "Photography and Cinematography",
        courseDescription: "A network focused on advancing and equipping ",
        courseDuration: "Duration: 4months",
        category: "media",
        cta: "register",
        cardState: true,
        url:    "../photo&cinematography.html"
      },
      {
          poster: "",
          courseTitle: "Culinary",
          courseDescription: "coming soon coming soon coming soon coming soon coming soon",
          courseDuration: "Coming soon",
          category: "culinary",
          cta: "Coming Soon",
          cardState: false ,
           url:    "../"
      },
      {
        poster: "",
        courseTitle: "Video Editing",
        courseDescription: "coming soon coming soon coming soon coming soon coming soon ",
        courseDuration: "Coming Soon",
        category: "media",
        cta: "Coming Soon",
        cardState: false,
         url:    "../" 
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (3).png",
        courseTitle: "Digital Marketing",
        courseDescription: "A network focused on advancing and equipping ",
        courseDuration: "Duration: 4months",
        category: "digital",
        cta: "register",
        cardState: true,
        url:    "../digital.html"
    },
    {
        poster: "",
        courseTitle: "SEO",
        courseDescription: "coming soon coming soon coming soon coming soon coming soon ",
        courseDuration: "Coming Soon",
        category: "media",
        cta: "Coming Soon",
        cardState: false,
         url:    "../"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (1).png",
        courseTitle: "UI/UX Design",
        courseDescription: "A network focused on advancing and equipping",
        courseDuration: "Duration: 4months",
        category:   "tech",
        cta: "register",
        cardState: true,
         url:    "../ui.html"
    },
    {
        poster: "./assets/images/png/DSC_9972 2 (1).png",
        courseTitle: "Backend Development",
        courseDescription: "A network focused on advancing and equipping",
        courseDuration: "Duration: 4months",
        category:   "tech",
        cta: "register",
        cardState: true,
         url:    "../webDev.html"

    },
    {
        poster: "./assets/images/png/DSC_9972 2 (1).png",
        courseTitle: "Mobile Development",
        courseDescription: "A network focused on advancing and equipping",
        courseDuration: "Duration: 4months",
        category:   "tech",
        cta: "register",
        cardState: true,
         url:    "../webDev.html"
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
   
    btn.addEventListener("focusin", function(e) {
      filterBtns.forEach(function(btn) {
        btn.classList.remove('btn-active')
      })

      e.target.classList.add('btn-active')
    })

    btn.addEventListener("focusout",function(e) {
      e.target.classList.remove('btn-active')
    })
    
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
     
      return `
      <div class="col-12 col-md-6 col-lg-4 mb-5">
          <div class="prog-item">
            <div class="card-poster-container">
              <img class="img-fluid" src="${item.poster}" alt="">
            </div>
              <h5 class="${item.cardState ? 'course-title' : 'grey-text course-title'}">
                  ${item.courseTitle}
              </h5>
              <p class="${item.cardState ? 'desc' : 'grey-text course-title'}">
                  ${item.courseDescription}
              </p>
              <div class="${item.cardState ? 'course-duration d-flex align-items-center' : 'grey-text course-duration d-flex align-items-center'} ">
                  <span class="course-duration-icon">
                      <img src="./assets/images/png/eva_clock-fill.png" alt="duration">
                  </span>
                  ${item.courseDuration}
              </div>
              <a href="${item.url}">
              <button class="prog-cta w-100" ${item.cardState ? "" : "disabled"} >
                  Register Now
              </button>
              </a>
          </div>
      </div>
      `;
    });
    displayMenu = displayMenu.join("");
    row.innerHTML = displayMenu;
  }
  
 
  //redirect url
  const techRoute = document.querySelector('.tech-route')
  
  // techRoute.addEventListener('click',()=>{
  //   window.location.replace('./program.html')
  //   filterBtns.forEach(btn=>{
      
  //   })
  // })
