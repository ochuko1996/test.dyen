const btns = filterBtns.forEach(function (btn) {

  btn.addEventListener("focusin", function (e) {
    filterBtns.forEach(function (btn) {
      btn.classList.remove('btn-active')
    })

    e.target.classList.add('btn-active')
  })

  btn.addEventListener("focusout", function (e) {
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


    if (category === "tech") {
      courseHeader.textContent = courseHeading[1]
      // console.log('hi');
    }
    else if (category === "media") {
      courseHeader.textContent = courseHeading[2]
      // console.log('hi');
    } else if (category === "culinary") {
      courseHeader.textContent = courseHeading[3]
    } else if (category === "digital") {
      courseHeader.textContent = courseHeading[4]
    } else {
      courseHeader.textContent = courseHeading[0]
    }

    // btn.addEventListener("click",()=>{
    //   let current = document.getElementsByClassName("btn-active")

    //   if (current.length > 0) {
    //     current[0].className = current[0].className.replace(" btn-active","" )
    //   }
    //   this.className += " btn-active"
    // })
  });
});