import projects from "../data/projects.js";

const modal = document.getElementById("project-modal");
const overlay = document.getElementById("modal-overlay");
const closeModal = [document.querySelector('.close'), document.querySelector('.modal-overlay')];

window.addEventListener("load", event => {
  const loader = document.querySelector(".loader-wrapper");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 800);
})

const setup = () => {
  generateIntro("Projects", ".projects .intro-text");
  generateIntro("About", ".about .intro-text");
}

const generateIntro = (title, section) => {
  const sectionDiv = `<div class="section-intro row-no-gutter">`;
  const forwards = `<h2 class="forwards">${title}</h2>`;
  const backwards = `<h2 class="backwards">${title}</h2>`;
  const filled = `<h2 class="backwards filled">${title}</h2>`;

  document.querySelector(section).innerHTML += 
  `${sectionDiv} ${forwards.repeat(4)} </div>
  ${sectionDiv} ${backwards} ${filled} ${backwards.repeat(2)} </div>
  ${sectionDiv} ${forwards.repeat(4)} </div>`;
}

projects.forEach(project => {
  const projectGrid = document.querySelector(".projects .grid");
  projectGrid.innerHTML += 
  `<div class="item" id=${project.id}><img src="${project.thumb}" alt="${project.title}"></div>`
})

document.querySelectorAll(".grid .item")
.forEach(item => item.addEventListener("click", event => {
  const project = projects.filter(project => project.id === item.id)[0];

  modal.classList.remove("modal-close");
  modal.classList.add("show"); 
  resetScroll(document.querySelector(".show")) 
  overlay.classList.add("show");
  document.body.style = "overflow: hidden";

  getModalHTML(project);
}))

const resetScroll = el => el.replaceWith(el);

const getModalHTML = (project) => {
  const img = document.querySelector(".modal-img");
  const content = document.querySelector(".modal-content");
  let tagHTML = "";
  project.tags.forEach(tag => tagHTML += `<li>${tag}</li>`);

  img.innerHTML = `<img src="${project.full}" alt="${project.title}" />`

  content.innerHTML =
  `<div class="main-content">
  <h2>Project</h2>
  <h1>${project.title}</h1>
  <p>${project.desc}</p>
  <div class="project-btns">
  <a href=${project.demoURL} target="_blank" class="project-btn">
  <ion-icon name="eye" class="icon"></ion-icon>${!project.caseStudy ? ` Demo` : ` Case Study`}</a>
  <a href=${project.codeURL} target="_blank" class="project-btn">
  <ion-icon name="code-slash"></ion-icon> ${project.isPrivate ? `Deploy` : 'Code'}</a>
  </div>
  </div>
  <div class="tags">
  <div class="tags-title"><h2>Technologies</h2></div>
  <div class="tags-content"><ul>${tagHTML}</ul></div></div>`;
}

closeModal.forEach(el => {
  el.addEventListener('click', event => {
    modal.classList.add("modal-close");
    setTimeout(() => {
      modal.classList.remove("show");
      overlay.classList.remove("show");
    }, 200);
    document.body.style = "overflow: auto";
  })
})

setup();