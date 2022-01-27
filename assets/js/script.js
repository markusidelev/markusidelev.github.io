"use strict"

/* ============================= Darkmode ======================= */

const themeBtn = document.querySelector('#darkmode_button')
const autoBtn = document.querySelector('#automode_button')
const arrowBtn = document.querySelector('#arrow_button')

const body = document.body
const btnContainer = document.querySelector(".button_container")
const currentTheme = localStorage.getItem('styleTheme')
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")


let saveTheme = (theme) => localStorage.setItem('styleTheme', theme)

let turnDark = (theme) => {
  body.classList.add('darkmode')
  themeBtn.classList.add('active')
  saveTheme(theme)
}

let turnLight = (theme) => {
  body.classList.remove('darkmode')
  themeBtn.classList.remove('active')
  saveTheme(theme)
}

let turnAuto = () => {
  body.classList.remove('darkmode')
  autoBtn.classList.add('active')
  saveTheme('automode')
  checkAuto()
}


let checkAuto = () => {

    if (prefersDarkScheme.matches) {
      turnDark('automode')
    } else {
      turnLight('automode')
    }
}


let checkLocalTheme = () => {
    if (currentTheme == 'darkmode') {
      turnDark('darkmode')
    } else if (currentTheme == 'lightmode') {
      turnLight('lightmode')
    } else if (currentTheme == 'automode') {
      turnAuto()
    } else {
      turnAuto()
    }
}

checkLocalTheme()

themeBtn.addEventListener('click', function() {
  autoBtn.classList.remove('active')
  
  if (body.classList.contains('darkmode')) {
    turnLight('lightmode')
    
   
  } else {
    turnDark('darkmode')
    
  }
})

autoBtn.addEventListener('click', function() {
  turnAuto()
})

arrowBtn.addEventListener('click', function() {
  btnContainer.classList.toggle("active")
})



/* ===================== Author Button ======================= */

$(".author .animated").hover(function(){
	$(".author .animated").toggleClass("rubberBand infinite");
});