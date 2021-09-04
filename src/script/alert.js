import { catchData } from './animate';

export {catchData} from './animate'
let main = document.querySelector('#main');
let section = main.children;
let counter = 0;



document.addEventListener('wheel', (e) => {mouseSlide(e)})
document.addEventListener('keyup', (e) => {catchKey(e)})


let animateEnd = true;

function mouseSlide(e){

    if(e.deltaY > 0){
        moveRight()
    }else{
        moveLeft()
    }
}


export function moveLeft(){
    if(animateEnd){
        animateEnd = false;
    if(counter < 3 ){
        counter++
    }
    }
    catchData(section[counter])
    console.log(counter,animateEnd)
    section[counter].style.transform = 'translateX(-100vw)'
    setTimeout(()=>{animateEnd = true},1000)
}

export function moveRight(){
    if(animateEnd){
        animateEnd = false;
    if(counter > 0 ){
        counter--
        }
    }   
    console.log(counter,animateEnd)
    section[counter + 1].style.transform = 'translateX(0vw)'
    setTimeout(()=>{animateEnd = true},1000)
}

export function changeSlide(slideHere){
    console.log(slideHere,counter)
    if(counter  < slideHere){
        for(let i = 0; i < 2 ; i++){
            moveLeft()
        }
    }
    if(counter  > slideHere){
        for(let i = 0; i < 2 ; i++){
            moveRight()
        }
    }
    
}

function catchKey(e){
    if(e.keyCode == 65){
        moveLeft()
    }
    if(e.keyCode == 37){
        moveLeft()
    }
    if(e.keyCode == 68){
        moveRight()
    }
    if(e.keyCode == 39){
        moveRight()
    }
}