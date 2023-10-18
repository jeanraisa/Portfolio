const navBar = document.querySelector(".nav-bar");
const navBarMenu = document.querySelector(".nav-bar-menu");
const body = document.querySelector("body");

navBarMenu.addEventListener("click", (event) => {
  navBar.classList.toggle("active");
  body.classList.toggle("overflow-disabled");
});

const projects = [
  {
    title: "hulu clone",
    description:
      "Clone Hulu's landing page with HTML, CSS, and JavaScript, learning responsive design, fetching data, and interactivity.",
    technologies: ["HTML", "CSS", "Javascript"],
    image: "./img/hulu_clone.png",
    githublink: "https://github.com/jeanraisa/hulu_clone",
  },
  {
    title: "AirBnB clone",
    description:
      "hbn school Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
    technologies: ["HTML", "CSS", "Python"],
    image: "./img/hbnb_logo.png",
    githublink: "https://github.com/jeanraisa/alu-AirBnB_clone",
  },
  {
    title: "Sortable list",
    description:
      "list of 10 richest people in the world Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  ",
    technologies: ["HTML", "CSS", "Javascript"],
    image: "./img/sortable.png",
    githublink: "https://github.com/jeanraisa/sortable_list_project",
  },
];

const projectsContainer = document.getElementById("projects-container");

projects.map((project) => {
  const projectTechnologies = document.createElement("ul"); // creating unordered list of technologies
  projectTechnologies.classList.add("project-technologies");
  project.technologies.map((tech) => {
    projectTechnologies.innerHTML += `
    <li class="project-tech">${tech}</li>
    `;
  });
  projectsContainer.innerHTML += `
    <div  class="project">
      <div class="project-header">
        <div class="project-sub-header">
          <h2 class="project-title font-roboto">${project.title}</h2>
          
          ${projectTechnologies.outerHTML}
        </div>
        <div class="project-description">${project.description}</div>
      </div>

      <a href="${project.githublink}" target="_blank" class="project-img-container">
        <img class="project-img" src="${project.image}" alt="${project.title}"/>
      </a>
    </div>
  `;
});

const languages = [
  {
    name: "Python",
    icon: "./img/python.svg",
  },
  {
    name: "Javascript",
    icon: "./img/js.svg",
  },
  {
    name: "HTML",
    icon: "./img/html.svg",
  },
  {
    name: "CSS",
    icon: "./img/css.svg",
  },
];

const languagesDiv = document.getElementById("languages");

languages.map((language) => {
  languagesDiv.innerHTML += `
    <div class="language">
    <div class="language-img-container">
      <img src="${language.icon}" alt="${language.name}" class="language-img"/>
    </div>
    <p class="language-name">${language.name}</p>
    </div>
  `;
});

const skills = ["GIT", "OOP", "UI", "REST API"];

const skillsDiv = document.getElementById("skills");

skills.map((skill) => {
  skillsDiv.innerHTML += `
    <div class="skill">${skill}</div>
  `;
});

// form validation
const email = document.getElementById("mail");
const form = document.getElementById("form-main");
const errorMsg = document.getElementById("form-error");
const userName = document.getElementById("name");
const message = document.getElementById("message");
errorMsg.innerHTML = "Your email address must be in lowercase";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMsg.style.visibility = "visible";
    errorMsg.classList.add("error-msg");
    setTimeout(() => {
      errorMsg.style.visibility = "hidden";
    }, 3000);
  } else {
    errorMsg.style.visibility = "hidden";
  }
});

// Local storage
function populateStorage() {
  const data = {
    userName: userName.value,
    userEmail: email.value,
    userMessage: message.value,
  };
  localStorage.setItem("user-data", JSON.stringify(data));
}

// Populating local storage
userName.addEventListener("focusout", populateStorage);
email.addEventListener("focusout", populateStorage);
message.addEventListener("focusout", populateStorage);

// Parse data from local storage and get item
const userDataParse = JSON.parse(localStorage.getItem("user-data"));

// Refill form inputs
userName.value = userDataParse.userName;
email.value = userDataParse.userEmail;
message.value = userDataParse.userMessage;
