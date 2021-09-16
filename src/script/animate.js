export function animElem(elem){
    let elems = elem.querySelectorAll('[data-anim]'),
        lastNumber ,
        allOrders = [],
        groupAnimateElems = [],
        elements = {}

    elems.forEach((element,index) => {
        // element.id =  elem.className + index
        allOrders.push(Number(element.getAttribute('data-order')))
    })
    lastNumber = allOrders.sort()[allOrders.length - 1]

    for(let i = 0; i <= lastNumber; i++){
        setTimeout(function() {
            elems.forEach((element,index) => {
                if(Number(element.getAttribute('data-order')) === i){
                    // groupAnimateElems.push(element)
                    let classAninmate = element.dataset.anim
                    element.style.animation = `${classAninmate} 1s ease-in-out forwards`
                }
            })

            // groupAnimateElems.forEach((elentik)=>{
            //     let classAninmate = elentik.dataset.anim
            //     elentik.style.animation = `${classAninmate} 1s ease-in-out forwards`
            // })

            groupAnimateElems = []
        }, 400 + 400 * i);
    }
}



