export function catchData(elem){
    let elems = elem.querySelectorAll('[data-yo]')
    // elems.forEach(element => {
    //     console.log(element)
    //     // element.animate(animation, ooptionAnimation)
    //     element.style.animation = "blah 3s ease-in-out "
    
    // });
    for (let i = 0; i < elems.length; i++) {
        (function(i) {
            setTimeout(function() {
                elems[i].style.animation = "blah 1s ease-in-out forwards"
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