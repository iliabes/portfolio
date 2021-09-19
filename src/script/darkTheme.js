let backgrounds = document.getElementsByTagName('section')
let text =  document.getElementsByTagName('p')
let topMneu = document.getElementById('topLine')
let footer = document.getElementById('footer')
let darkModeBtn = document.getElementById('darkMode')
let darkMode = false;

darkModeBtn.addEventListener('click',()=>{distributorTheme()})


function distributorTheme(){
    if(darkMode === false){
        
        dark()
    }else{
        light()
    }

        
   
}

function dark(){
    console.log('light')
    topMneu.style.backgroundColor = '#fff'
    footer.style.backgroundColor = '#fff'
    console.log(text)
    for(let i = 0; i <= backgrounds.length - 1; i++){
        backgrounds[i].style.backgroundColor = '#fff'
    }
    for(let i = 0; i <= text.length - 1; i++){

        text[i].style.color = '#000'
    }
    darkMode = false
}

function light(){
    console.log('dark')
    topMneu.style.backgroundColor = '#000'
    footer.style.backgroundColor = '#000'
    console.log(text)
    for(let i = 0; i <= backgrounds.length - 1; i++){
        backgrounds[i].style.backgroundColor = '#000'
    }
    for(let i = 0; i <= text.length - 1; i++){
 
        text[i].style.color = '#fff'
    }
    darkMode = true
}
