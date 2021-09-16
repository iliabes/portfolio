document.addEventListener('touchstart',(e)=>{touchStart(e)})
document.addEventListener('touchmove',(e)=>{touchMove(e)})
document.addEventListener('touchend',(e)=>{touchEnd(e)})
import {moveLeft, moveRight} from './switchSlide'

let x1 = 0;
let y1 = 0;

let x2 = 0;
let y2 = 0;


function touchStart(e){
    x1 = e.touches[0].screenX
    y1 = e.touches[0].screenY
}

function touchMove(e){
    x2 = e.touches[0].screenX;
    y2 = e.touches[0].screenY;

}

function touchEnd(e){
    if((Math.abs(x1) > Math.abs(x2)) && (Math.abs(y1) < Math.abs(y2))){
        moveLeft()
    }else{
        moveRight()
    }
}


