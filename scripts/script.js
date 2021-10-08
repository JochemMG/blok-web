// JavaScript Document

var deButton = document.querySelector('.nav_button');

deButton.addEventListener('click', toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle('toonMenu');
  console.log('hallo');
}

// /**********************/
// /* straks verwijderen */
// /**********************/

// var navigatieButton = document.querySelector('.nav_button');

// var uitgeklaptMenu = false;

// navigatieButton.addEventListener('click', function(){


// // uitroepen teken betekent niet, in dit geval dus niet waar

//   if (!uitgeklaptMenu) {
//     navigatieButton.classList.add('openedMenu');
//     uitgeklaptMenu = true;
//   } else {
//     navigatieButton.classList.remove('openedMenu');
//     uitgeklaptMenu = false;
//   }
// });

// /*******/
// /* ... */
// /*******/

var buttonText = document.querySelector('.color_preview p');

var previewButton = document.querySelector('.color_preview button');

previewButton.addEventListener('click', toggleText);

function toggleText(event) {
  buttonText.classList.toggle('hidden_text');
  console.log('de toggleText function werkt goed')
}


// /**************/
// /* test-start */
// /**************/

// var buttonText = document.querySelector('.color_preview p');
// var previewButton = document.querySelector('.color_preview button');

// var verwijderdeText = false;

// previewButton.addEventListener('click', function(){

//   if (!verwijderdeText) {
//     buttonText.classList.remove('removed_text');
//     verwijderdeText = true;
//     console.log('de text moet nu verwijderen als het goed is');
//   } else {
//     buttonText.classList.add('removed_text');
//     verwijderdeText = false;
//   }
// })

// /************/
// /* test-end */
// /************/