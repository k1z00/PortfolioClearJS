import prod from '/public/json/socialLinks.json'
import contact from '/public/json/project.json'





const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav_item_text");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
  hamburger.classList.toggle("active");
});





const buttonInfo = document.querySelector("#button-info");
const infoContact = document.querySelector(".info_contact");





function getApend(data, time) {
  return data.appendChild(time);
}


const objInfo = contact.links

let iconsAdded = false;
function getInfoIcons() {
  infoContact.querySelectorAll("span").forEach((span) => span.remove()); 
  for (let i = 0; i < objInfo.length; i++) {
    const infoIcons1 = document.createElement("span");
    const infoIcons2 = document.createElement("img");
    const infoIcont = document.createElement("a");

    infoIcons2.classList.add("span-info");

    infoIcons2.src = objInfo[i].src;

    getApend(infoIcons1, infoIcons2);
    getApend(infoIcons2, infoIcont);
    getApend(infoContact, infoIcons1);

    infoIcont.href = objInfo[i].href;
    const infoContacte = document.querySelector(".span-info");

   
    infoIcont.href = objInfo[i].href;

    
    infoIcons2.addEventListener("click", (event) => {
      window.open(infoIcont.href, "_blank");
    });
  }
}

buttonInfo.addEventListener("click", () => {
  if (!iconsAdded) {
    getInfoIcons();
    iconsAdded = true;
  } else {
    infoContact.querySelectorAll("span").forEach((span) => span.remove());
    iconsAdded = false;
  }
});












const Skills = document.querySelector("#Skills");
const mySkils = document.querySelector(".text__skills");
const muProgects = document.querySelector(".main__project");
const Projects = document.querySelector("#Projects");
const footer = document.querySelector(".footer")
const message = document.querySelector("#message");

function navClick (event, info) {
  event.addEventListener('click', () => {
    const offset = 95; 
    window.scrollTo({
      top: info.offsetTop - offset, 
      behavior: 'smooth'
    });
  });
}

navClick (Skills, mySkils)
navClick (Projects, muProgects)
navClick (message, footer)










const imgProject = document.querySelector(".img_progect");
const h2Project = document.querySelector(".h2_project");
const textContentProject = document.querySelector(".text_content_project");
const arrow1 = document.querySelector("#Arow1");
const arrow2 = document.querySelector("#Arow2");


const objProject = prod.Progect 

function updateProject(newIndex) {
  currentIndex = newIndex;
  imgProject.src = objProject[currentIndex].src;
  h2Project.textContent = objProject[currentIndex].h2;
  textContentProject.textContent = objProject[currentIndex].text;
  linkElement.href = objProject[currentIndex].href;
}



const linkElement = document.createElement("a");

imgProject.appendChild(linkElement);

let currentIndex = 0;


updateProject(0);

arrow2.addEventListener("click", () => {
  updateProject((currentIndex + 1) % objProject.length);
});

arrow1.addEventListener("click", () => {
  updateProject((currentIndex - 1 + objProject.length) % objProject.length);
});

imgProject.addEventListener("click", () => {
  window.open(linkElement.href, "_blank");
});




