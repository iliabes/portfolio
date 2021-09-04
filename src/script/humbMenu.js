let buttonCros = document.getElementById('buttonCros')
let buttonMenu = document.getElementById('buttonMenu')
let humbMenu = document.getElementById('humbMenu')

console.log(buttonMenu)
buttonCros.addEventListener('click', function (event) {
    humbMenu.style.opacity = 0
    humbMenu.style.display = 'none'
  });
  
buttonMenu.addEventListener('click',()=>{
    humbMenu.style.opacity = 1
    humbMenu.style.display = 'block'
})