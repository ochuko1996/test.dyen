 const studentView =[
    {
        avatar:     "./assets/images/png/DSC_0361 1.png",
        fullName:   "Stephen Adesomething",
        course:     "Backend Develper",
        review:     "i'm a backend developer that is bla bla bla, something something good in python, i have entry level of python in Freecodecamp",

    },
    {
        avatar:     "./assets/images/png/DSC_0361 1.png",
        fullName:   "Ese Esiho",
        course:     "frontend Develper",
        review:     "i'm a frontend developer that is bla bla bla, something something good in javascript, i have entry level of python in Freecodecamp",

    },
    {
        avatar:     "./assets/images/png/DSC_0361 1.png",
        fullName:   "Ochuko George",
        course:     "MERN Developer",
        review:     "i'm a MERN Developer, something something good in javascript, MONGODB, ExpressJs, ReactJs and NodeJs, also an entry level React Native with Facebook",

    },
    {
        avatar:     "./assets/images/png/DSC_0361 1.png",
        fullName:   "Adetola Adesomething",
        course:     "Full Stack Developer",
        review:     "i'm a Full Stack Developer that is bla bla bla, something something proficient in C, C#, C++, and Javascript e.t.c"

    },
    {
        avatar:     "./assets/images/png/DSC_0361 1.png",
        fullName:   "Stephen Adesomething",
        course:     "Backend Develper",
        review:     "i'm backend developer that is bla bla bla, something something good in python, i have entry level of python in Freecodecamp",

    },
    {
        avatar:     "./assets/images/png/DSC_0361 1.png",
        fullName:   "Stephen Adesomething",
        course:     "Backend Develper",
        review:     "i'm backend developer that is bla bla bla, something something good in python, i have entry level of python in Freecodecamp",

    },
    {
        avatar:     "./assets/images/png/DSC_0361 1.png",
        fullName:   "Stephen Adesomething",
        course:     "Backend Develper",
        review:     "i'm backend developer that is bla bla bla, something something good in python, i have entry level of python in Freecodecamp",

    },
    {
        avatar:     "./assets/images/png/DSC_0361 1.png",
        fullName:   "Stephen Adesomething",
        course:     "Backend Develper",
        review:     "i'm backend developer that is bla bla bla, something something good in python, i have entry level of python in Freecodecamp",

    },
    
]
const studentRow = document.querySelector('.student-row')
studentView.forEach(item => {
    const div = document.createElement('div')
    div.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4")
    div.innerHTML = `
        <div class="student-review-card">
            <div class="card-avatar">
                <img src="${item.avatar}" alt="">
            </div>
            <h5 class="student-fullname">
                ${item.fullName}
            </h5>
            <p class="student-course">
                ${item.course}
            </p>
            <p class=" text-center">
                ${item.review}            
            </p>
            <div class="student-rating">
                &#9733 &#9733 &#9733 &#9733 &#9733
            </div>
            <div class="review-social-icon d-flex justify-content-between">
                <span>
                    <i class="fab fa-instagram"></i>
                </span>
                <span>
                    <i class="fab fa-twitter" aria-hidden="false"></i>
                </span>
                <span>
                    <i class="fab fa-facebook"></i>
                </span>
            </div>


        </div>
    `
    studentRow.appendChild(div)
});
const sectionCenter = document.querySelector(".section-center");

const questionAndAnswer = [
    {
        question:   "What is the time for the classes?",
        answer:     "Monday and Thursday 12:30pm",
    },
    {
        question:   "Is there provision for accommodation for participants coming from distant locations?",
        answer:     "No. we don't give accomodation",
    },
    {
        question:   "How much do I have to pay to register?",
        answer:     "There is no fee attached to it... It is fully free",
    },
    {
        question:   "Will there be any financial aid giving to participants after going through the program?",
        answer:     "No, there won't be any financial aid",
    },
    {
        question:   "Is this organization put together by the Government?",
        answer:     "No, It's a Non Governmental Organization (NGO)",
    },
] 
questionAndAnswer.forEach(qAndA=>{
    const article = document.createElement("article")
    article.classList.add('question')
    article.innerHTML = `
    
    <div class="question-title d-flex">
    <p>${qAndA.question}</p>
    <button type="button" class="question-btn">
    <span class="plus-icon">
          <i class="far fa-plus-square"></i>
          </span>
        <span class="minus-icon">
        <i class="far fa-minus-square"></i>
        </span>
        </button>
        </div>
        
        <div class="question-text">
        <p>
        ${qAndA.answer}
        </p>
        </div>
        `
        sectionCenter.appendChild(article)
    })
    const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);
  
  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});