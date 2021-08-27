let main = document.querySelector('#main');
let section = main.children;
let counter = 0;



document.addEventListener('wheel', (e) => {mouseSlide(e)})
document.addEventListener('keyup', (e) => {catchKey(e)})


function mouseSlide(e){
    if(e.deltaY > 0){
        moveRight()
    }else{
        moveLeft()
        
    }
}

for(let elem of section){
    console.log(elem)
}



console.log(section)

function moveLeft(){
    if(counter < 3){
        counter++
    }
    console.log(counter,section[counter])
    section[counter].style.transform = 'translateX(-100vw)'
}

function moveRight(){
    if(counter > 0){
        counter--
    }
    console.log(counter,section[counter])
    section[counter + 1].style.transform = 'translateX(0vw)'
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