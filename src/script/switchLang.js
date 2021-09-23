let topLang = document.getElementById('topLang')
let hambSwitchLang = document.getElementById('hambSwitchLang')
let lang = 'Eng'
let elems = document.querySelectorAll('[data-lang]')
console.log(elems)
function distributorLang(Mode){
    console.log(Mode)
    switch(Mode){
        case 'Eng': 
            rus()
            break;
        case 'Ru': 
            eng()
            break;

    }
}

function rus(){
    topLang.innerText = 'Ru'
    lang = 'Ru'
    elems.forEach((elem)=>{
        console.log(elem)
        // console.log()
        let text = elem.getAttribute('data-lang')
        elem.innerText = text
    })
}

function eng(){
    topLang.innerText = 'Eng'
    lang = 'Eng'
}


topLang.addEventListener('click', ()=>{distributorLang(lang)})
hambSwitchLang.addEventListener('click', ()=>{distributorLang(lang)})

