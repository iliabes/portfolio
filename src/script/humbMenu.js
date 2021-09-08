import {changeSlide} from './alert'

let buttonCros = document.getElementById('buttonCros')
let buttonMenu = document.getElementById('buttonMenu')
let humbMenu = document.getElementById('humbMenu')
let hambAbout = document.getElementById('hambAbout')
let hambProjects = document.getElementById('hambProjects')
let hambScills = document.getElementById('hambScills')
let humbContacts = document.getElementById('hambContacts')
let buttonUp = document.getElementById('buttonUp')

let topAbout = document.getElementById('topAbout')
let topProjects = document.getElementById('topProjects')
let topSkils = document.getElementById('topSkils')
let topContacts = document.getElementById('topContacts')



topAbout.addEventListener('click', function (event) {
  changeSlide(0)
  humbMenu.style.display = 'none'
});


topProjects.addEventListener('click', function (event) {
  changeSlide(1)
  humbMenu.style.display = 'none'
});

topSkils.addEventListener('click', function (event) {
  changeSlide(2)
  humbMenu.style.display = 'none'
});


topContacts.addEventListener('click', function (event) {
  changeSlide(3)
  humbMenu.style.display = 'none'
});


hambAbout.addEventListener('click', function (event) {
  changeSlide(0)
  humbMenu.style.display = 'none'
});


buttonUp.addEventListener('click', function (event) {
  changeSlide(0)
  humbMenu.style.display = 'none'
});

hambProjects.addEventListener('click', function (event) {
  changeSlide(1)
  humbMenu.style.display = 'none'
});

hambScills.addEventListener('click', function (event) {
  changeSlide(2)
  humbMenu.style.display = 'none'
});

humbContacts.addEventListener('click', function (event) {
  changeSlide(3)
  humbMenu.style.display = 'none'
});

buttonCros.addEventListener('click', function (event) {
    humbMenu.style.opacity = 0
    humbMenu.style.display = 'none'
  });
  
buttonMenu.addEventListener('click',()=>{
    humbMenu.style.opacity = 1
    humbMenu.style.display = 'block'
})

