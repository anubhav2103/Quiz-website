
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of ROM ?",
    answer: "Read Only Memory",
    options: [
      "Read Only Memory",
      "Randomely Memory",
      "Run Only Memory",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of OS ?",
    answer: "Operating System",
    options: [
      "Operating Setting",
      "Operating System",
      "Oxford Syatem",
      "None of these"
    ]
  },
  {
     id: 4,
    question: "What is the full form of AWS ?",
    answer: "Amazon Web Service",
    options: [
      "Amazon Web Service",
      "Apple Web Service",
      "Amazon Web Setting",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 6,
    question: "What is the full form of JS?",
    answer: "Java Script",
    options: [
      "Java Script",
      "Java Series",
      "Just Script",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "What is Github?",
    answer: "Open Source",
    options: [
      "Open Source",
      "Open Service",
      "Open Setting",
      "None of these"
    ]
  },{
    id: 8,
    question: "What is the full form of CSS?",
    answer: "Cascading Style Sheet",
    options: [
      "Central Style Sheet",
      "Central Setting Sheet",
      "Cascading Style Sheet",
      "None of these"
    ]
  },
  {
    id: 9,
    question: "What is the full form of HTML?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Markup Language",
      "Hyper Tension Markup Language",
      "Highr Tension Markup Language",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
