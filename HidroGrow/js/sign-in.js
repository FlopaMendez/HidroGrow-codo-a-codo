function signOut(){
    let estado = document.getElementsByClassName("link sign-in")
    estado[0].innerHTML = "CERRAR SESION"
}

function mensaje(){
    let mensaje = document.getElementsByClassName("mensaje-bienvenida")
    mensaje[0].innerHTML = (`Has ingresado correctamente.`)
    
}