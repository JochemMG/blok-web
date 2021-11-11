// JavaScript Document

var deButton = document.querySelector('.nav_button');

deButton.addEventListener('click', toggleMenu);

deButton.addEventListener('click', toggleSecondDiv);

function toggleMenu(event) {
  deNav = document.querySelector('.nav');
  deNav.classList.toggle('toonMenu');
  console.log('hallo');
}

function toggleSecondDiv(event) {
  deSecondButton = document.querySelector('.second_div');
  deSecondButton.classList.toggle('shown_second_div');
  console.log('second divje werkt goed');
}

/****************/
/* testen start */
/****************/

var graphiteButton = document.querySelector('.graphite_button');
var goldButton = document.querySelector('.gold_button');
var sierraButton = document.querySelector('.sierra_button');
var silverButton = document.querySelector('.silver_button');

var graphiteButtonSCD = document.querySelector('.graphite_button_scd');
var goldButtonSCD = document.querySelector('.gold_button_scd');
var sierraButtonSCD = document.querySelector('.sierra_button_scd');
var silverButtonSCD = document.querySelector('.silver_button_scd');

var sierraPhone = document.querySelector('.sierra_phone');
var sierraPhoneScd = document.querySelector('.sierra_phone_scd');

function graphiteKnopjeSCD(){
  console.log('scd function graphite');

  sierraPhoneScd.src = './images/compare_iphone13_pro_graphite__d1df9sqcud8i_large.jpg';
}

function goldKnopjeSCD(){
  console.log('scd function gold');

  sierraPhoneScd.src = './images/compare_iphone13_pink__cqv8xkwki8mu_large.jpg';
}

function sierraKnopjeSCD(){
  console.log('scd function sierra');

  sierraPhoneScd.src = './images/compare_iphone13_pro_max_sierra_blue__clciothwemj6_large.jpg';
}

function silverKnopjeSCD(){
  console.log('scd function silver');

  sierraPhoneScd.src = './images/compare_iphone13_pro_max_silver__cgoviiu46pqq_large.jpg';
}

function goldKnopje(){
  console.log('function gold werkt goed');

  sierraPhone.src = './images/compare_iphone13_pink__cqv8xkwki8mu_large.jpg'
}

function silverKnopje(){
  console.log('function silver werkt goed');

  sierraPhone.src = './images/compare_iphone13_pro_max_silver__cgoviiu46pqq_large.jpg';
}

function sierraKnopje(){
  console.log('function sierra werkt goed');

  sierraPhone.src = './images/compare_iphone13_pro_max_sierra_blue__clciothwemj6_large.jpg';
}

function graphiteKnopje(){
  console.log('function graphite werkt goed');

  sierraPhone.src = './images/compare_iphone13_pro_graphite__d1df9sqcud8i_large.jpg';
}

graphiteButtonSCD.addEventListener('click', graphiteKnopjeSCD);
goldButtonSCD.addEventListener('click', goldKnopjeSCD);
sierraButtonSCD.addEventListener('click', sierraKnopjeSCD);
silverButtonSCD.addEventListener('click', silverKnopjeSCD);

goldButton.addEventListener('click', goldKnopje);
graphiteButton.addEventListener('click', graphiteKnopje);
sierraButton.addEventListener('click', sierraKnopje);
silverButton.addEventListener('click', silverKnopje);

/****************/
/* testen einde */
/****************/