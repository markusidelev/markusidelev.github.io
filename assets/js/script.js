"use strict"

/* ============================= Darkmode ======================= */
const btn = document.querySelector('.darkmode_button')
const autoBtn = document.querySelector('.automode_button')

const body = document.body
const currentTheme = localStorage.getItem('styleTheme')
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")


let saveTheme = (theme) => localStorage.setItem('styleTheme', theme)

let turnDark = (theme) => {
  body.classList.add('darkmode')
  saveTheme(theme)
}

let turnLight = (theme) => {
  body.classList.remove('darkmode')
  saveTheme(theme)
}

let turnAuto = () => {
  body.classList.remove('darkmode')
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

btn.addEventListener('click', function() {
  if (body.classList.contains('darkmode')) {
    turnLight('lightmode')
   
  } else {
    turnDark('darkmode')
    
  }
})

autoBtn.addEventListener('click', function() {
  turnAuto()
})