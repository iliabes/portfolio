export function catchData(elem){
    let elems = elem.querySelectorAll('[data-anim]')
    let allNumbers = []
    let lastNumber 
    let groupAnimateElems = []
    let elements = {}

    elems.forEach((element,index) => {
        element.id =  elem.className + index
        allNumbers.push(Number(element.getAttribute('data-order')))
    })
    lastNumber = allNumbers.sort()[allNumbers.length - 1]

    for(let i = 0; i <= lastNumber; i++){
        console.log('запуск цикла - '+ i);
            setTimeout(function() {
                console.log('запуск анимации - ' + i)
                elems.forEach((element,index) => {
                    if(Number(element.getAttribute('data-order')) === i){
                        groupAnimateElems.push(element)
                    }
            })
    
            groupAnimateElems.forEach((elentik)=>{
                console.log(elentik)
                let classAninmate = elentik.dataset.anim
                elentik.style.animation = `${classAninmate} 1s ease-in-out forwards`
            })

            groupAnimateElems = []
            }, 1000 + 1000 * i);
    }




}



// export function catchData(elem){
//     let elems = elem.querySelectorAll('[data-yo]')
//     let massElem = []
//     elems.forEach(element => {
//         if(massElem.includes(element.classList[0]) === false){
//             massElem.push(element.classList[0])
//         }
//         })
//         console.log(massElem)

//     for (let i = 0; i < elems.length; i++) {
//         (function(i) {
//             setTimeout(function() {
//                 console.log(elems[i])
//                 let classAninmate = elems[i].dataset.yo
//                 elems[i].style.animation = `${classAninmate} 1s ease-in-out forwards`
//             }, 500 * i);
//         })(i);
//     }

// }



// for (let i = 0; i < groupAnimateElems.length; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(elems[i])
//             let classAninmate = elems[i].dataset.anim
//             elems[i].style.animation = `${classAninmate} 1s ease-in-out forwards`
//         }, 500 * i);
//     })(i);
// }