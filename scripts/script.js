// JavaScript Document

var deButton = document.querySelector(".nav_button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
  console.log('hallo');
}