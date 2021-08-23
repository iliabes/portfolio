import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


import sass from './style.sass'
import './../node_modules/aos/src/sass/aos.scss'
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


import  './style/sdsd'
import DOTS from   './../node_modules/vanta/dist/vanta.dots.min'



VANTA.DOTS({
  el: "#test",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})