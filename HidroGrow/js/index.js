/*
'use static'

const grande = document.querySelector('.grande')
const punto  = document.querySelectorAll('.punto')

//asignar un click a cada punto
    //Saber la posicion de ese punto
    //Aplicar un transfor traslateX al grande
    //Quitar la clase activo a todos los puntos
    //Anadir la clase activo al punto que hemos hecho click

//recorrer los puntos
punto.forEach( (cadaPunto, i) => { 
    //asignar un click a cada punto
    punto[i].addEventListener('click',()=>{

        //guardadr la posicion de ese punto
        let posicion = i    

        //Calcular el desplazamiento
        let operacion = posicion * -50
        //cuadno posicion es 0 el transformX es 0 (0*-50=0)
        //cuando posicion es 1 el tranform es -50% (1*-50=-50)

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach( (cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')



    })
})

 */
