// import loader from  "./style/loader.css"
import './script/preload'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


import sass from './style.sass'
import Typed from './../node_modules/typed.js/src/typed'
import AOS from 'aos'






var options = {
    strings: ['Hello', ' I am Ilya, I am learning js and want to become a front-end developer'],
    typeSpeed: 60
  };
  

var typed = new Typed('#element', options);

AOS.init({
    duration: 400,
    offset: 80,
    mirror: false,
    startEvent: 'DOMContentLoaded'
})





