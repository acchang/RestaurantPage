import chiefDiv from './persp';
import loadMenu from './menu';
import loadHome from './home';
import loadVisit from './visit';

init();

// function addNavEvents() {
//   const homeBtn = document.getElementById('home');
//   const menuBtn = document.getElementById('menu');
//   const contactBtn = document.getElementById('contact');

//   homeBtn.addEventListener('click', loadHome);
//   menuBtn.addEventListener('click', loadMenu);
//   contactBtn.addEventListener('click', loadContact);
// }

function init() {
    chiefDiv();
    loadMenu();
    loadHome();
    loadVisit();
//   addNavEvents();
}




// import loadHome from "./home";
// // import loadMenu from "./menu";
// // import loadContact from "./contact";

// // import initializeWebsite from "./website";

// function initializeWebsite() {
//     const content = document.getElementById("content");
//     content.append(loadHome())
//     // content.appendChild(createHeader());
//     // content.appendChild(createMain());
//     // content.appendChild(createFooter());
  
//     // setActiveButton(document.querySelector(".button-nav"));
//   }

// initializeWebsite();
