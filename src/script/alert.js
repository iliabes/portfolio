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
    let counterMemo = counter;
    console.log(slideHere,counter)
    if(counterMemo  < slideHere){
        console.log( slideHere - counterMemo)
        for(let i = 1; i <= slideHere - counterMemo; i++){
            console.log('раз' + i,slideHere - counterMemo + 'kolvo')
            animateEnd = true
            moveLeft()
        }
    }

    if(counterMemo  > slideHere){
        console.log(counterMemo + slideHere + 'ttt' )
        for(let i = 0; i < counterMemo - slideHere ; i++){
            animateEnd = true
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