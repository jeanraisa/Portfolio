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
      "Online movie website Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    technologies: ["HTML", "CSS", "Javascript"],
    image: "./img/hulu_clone.png",
  },
  {
    title: "AirBnB clone",
    description:
      "hbn school Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    technologies: ["HTML", "CSS", "Python"],
    image: "./img/hulu_clone.png",
  },
  {
    title: "Sortable list",
    description:
      "list of 10 richest people in the world Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ",
    technologies: ["HTML", "CSS", "Javascript"],
    image: "./img/hulu_clone.png",
  },
];

const projectsContainer = document.getElementById("projects-container");

projects.map((project) => {
  projectsContainer.innerHTML += `
    <div class="project">
      <div class="project-header">
        <div class="project-sub-header">
          <h2 class="project-title">${project.title}</h2>
          <div class="project-technologies">
            ${project.technologies.map(
              (tech) => `<span class="project-tech">${tech.toString()}</span>`
            )}
          </div>
        </div>
        <div class="project-description">${project.description}</div>
      </div>

      <div class="project-img-container">
        <img class="project-img" src="${project.image}" alt="${project.title}"/>
      </div>
    </div>
  `;
});
