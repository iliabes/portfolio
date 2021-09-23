let backgrounds = document.getElementsByTagName('section')
let text =  document.getElementsByTagName('p')
let topMenu = document.getElementById('topLine')
let footer = document.getElementById('footer')
let darkModeBtn = document.getElementById('darkMode')
let contHumb = document.getElementById('contHumb') 
let hambSwithDark = document.getElementById('hambSwithDark')

let darkMode = 'dark';
let ligthColor1 = 'rgb(236 47 86)'
let ligthColor2 = '#c4c0d3'
let darkColor1 = '#181818';
let darkColor2 = 'rgb(15 15 16)';

hambSwithDark.addEventListener('click',()=>{distributorTheme(darkMode)})
darkModeBtn.addEventListener('click',()=>{distributorTheme(darkMode)})


function distributorTheme(Mode){
    console.log(Mode)
    switch(Mode){
        case 'dark': 
            light()
            break;
        case 'light': 
            dark()
            break;
    }
}

function light(){ 
    console.log('light')
    darkMode = 'light'
    topMenu.style.backgroundColor = ligthColor1
    footer.style.backgroundColor = ligthColor1
    contHumb.style.backgroundColor = ligthColor1
    for(let i = 0; i <= backgrounds.length - 1; i++){
        backgrounds[i].style.backgroundColor = ligthColor2
    }
    for(let i = 0; i <= text.length - 1; i++){
        text[i].style.color = 'black'
    }
    
}

function dark(){
    console.log('dark')
    darkMode = 'dark'
    topMenu.style.backgroundColor = darkColor1
    footer.style.backgroundColor = darkColor1
    contHumb.style.backgroundColor = darkColor1
    for(let i = 0; i <= backgrounds.length - 1; i++){
        backgrounds[i].style.backgroundColor = darkColor2
    }
    for(let i = 0; i <= text.length - 1; i++){

        text[i].style.color = 'white'
    }
    
}


