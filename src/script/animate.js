export function catchData(elem){
    let elems = elem.querySelectorAll('[data-yo]')
    let massElem = []
    elems.forEach(element => {
        if(massElem.includes(element.classList[0]) === false){
            massElem.push(element.classList[0])
        }
        })
        console.log(massElem)

    for (let i = 0; i < elems.length; i++) {
        (function(i) {
            setTimeout(function() {
                console.log(elems[i])
                let classAninmate = elems[i].dataset.yo
                elems[i].style.animation = `${classAninmate} 1s ease-in-out forwards`
            }, 500 * i);
        })(i);
    }

}

let animation = [
    { transform: 'translateX(-1000px)' },
    { transform: 'translateX(0)'  } 
]

let ooptionAnimation = {
    duration: 2000
}



    // elems.forEach(element => {
    //     console.log(element)
    //     // element.animate(animation, ooptionAnimation)
    //     element.style.animation = "blah 3s ease-in-out "
    
    // });
    