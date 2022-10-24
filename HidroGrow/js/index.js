'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        let posicion  = i
        let operacion = posicion * -50

        // movemos el grande
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos todos los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})

// GALERÍA DE IMAGNES

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }

// FORMULARIO DE COMPRA

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function RegistroCheck() {
    if (!(document.getElementById('CheckRegistrar').checked)) {
     document.getElementById('inputPassword').style.visibility="hidden";
     document.getElementById('inputPassword').required = false;
     document.getElementById('CheckNewsletter').disabled = false; 
    }
    else {
    document.getElementById('inputPassword').style.visibility="visible";
    document.getElementById('inputPassword').required = true;
    document.getElementById('CheckNewsletter').checked = true;  
    document.getElementById('CheckNewsletter').disabled = true;
    }
}


function HiddenMenu(){
 document.getElementById("encabezado").classList.toggle('no-show');
}
window.onload = function() 
{
  document.getElementById("encabezado").addEventListener( 'click' , HiddenMenu ); 
}



