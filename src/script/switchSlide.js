import { animElem } from './animate';

let main = document.querySelector('#main');
let section = main.children;
console.log(section)
let counter = 0;
let animateEnd = true;


document.addEventListener('wheel', (e) => {mouseSlide(e)})
document.addEventListener('keyup', (e) => {catchKey(e)})


function mouseSlide(e){
    if(e.deltaY > 0){
        moveRight()
    }else{
        moveLeft()
    }
}

function catchKey(e){
    switch(e.keyCode) {
        case 65:  
            moveLeft()
            break
        case 37:  
            moveLeft()
            break
        case 68:  
            moveRight()
            break
        case 39:  
            moveRight()
            break
        }
}


export function moveLeft(){
    
    if(animateEnd){
        console.log('moveLEft')
        animateEnd = false;
    if(counter < 3 ){
        counter++
    }
    }
    animElem(section[counter])
    section[counter].style.transform = 'translateX(-100vw)'
    setTimeout(()=>{animateEnd = true},1000)
}

export function moveRight(){
    
    if(animateEnd){
        console.log('moveRight')
        animateEnd = false;
    if(counter > 0 ){
        counter--
        }
    }   
    section[counter + 1].style.transform = 'translateX(0vw)'
    setTimeout(()=>{animateEnd = true},1000)
}


export function changeSlide(slideHere){
    let counterMemo = counter;

    if(counterMemo  < slideHere){
        for(let i = 1; i <= slideHere - counterMemo; i++){
            // console.log('раз' + i,slideHere - counterMemo + 'kolvo')
            animateEnd = true
            moveLeft()
        }
    }

    if(counterMemo  > slideHere){
        for(let i = 0; i < counterMemo - slideHere ; i++){
            animateEnd = true
            moveRight()
        }
    }
}

