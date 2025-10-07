'use strict'

//Voy a añadir comentarios2

//Eventos
//Son funciones que se ejecutan cada vez que sucede algo
//por ejemplo hacer click, que el usuario mueva el raton...

//Eventos del raton

function cambiarColor(){
    console.log('Me has dado click')
    
    var backgroundButton = boton.style.background
    if(backgroundButton == 'green')
    {
        boton.style.background = 'blue'
    
    }else {
        boton.style.background = 'green'
    }
    
    boton.style.padding = '10px'
    boton.style.color = "white"
    return true
}

var boton = document.querySelector('#boton')

//Captura el evento Click
boton.addEventListener('click', function(){
    cambiarColor()
})

//Mouse over
boton.addEventListener('mouseover', function(){
    boton.style.background = 'orange'
})

//Mouse out
boton.addEventListener('mouseout', function(){
    boton.style.background = 'pink'
})

//Creamos un formulario en el html y vamos a ver los eventos que tienen que
//ver con focus, blur, keydown, keypress, keyup
var input = document.querySelector('#campo_nombre')

input.addEventListener('focus', function(){
    console.log('Estas dentro del input FOCUS')
})

//Elemento BLUR es igual solo que cuando salimos del focus
input.addEventListener('blur', function(){
    console.log('Estas fuera del input BLUR')
})

//Keydown cuando estamos justo pulsando una tecla [PULSANDO]
input.addEventListener('keydown', function(event){
    console.log(event)
    console.log('[KEYDOWN] Estas pulsando la tecla ' + event.key)
})

//Keypress cuando hemos pulsado la tecla [PRESIONADA]
input.addEventListener('keypress', function(event){
    console.log(event)
    console.log('[KEYPRESS] Has pulsando la tecla ' + event.key)
})

//Keyup cuando hemos soltado la tecla [SOLTADA]
input.addEventListener('keyup', function(event){
    console.log(event)
    console.log('[KEYUP] Has pulsando la tecla ' + event.key)
})



//Para evitar errores y no tener que estar pendientes de donde hemos cargado nuestro SCRIPT
//si arriba o abajo
//tenemos el evento LOAD, añadimos dentro todo nuestro codigo entonces todo se va a ejecutar
//cuando ya este cargado todo 
window.addEventListener('load', function() {

}) //Final del load