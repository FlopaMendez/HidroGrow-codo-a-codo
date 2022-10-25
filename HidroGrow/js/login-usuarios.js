var contenidoUsr = document.querySelector('#contenidoUsr');
var contenidoDevice = document.querySelector('#contenidoDevice');

function traer() {

  fetch('https://randomuser.me/api/')

    .then(res => res.json())
    .then(data => {
      contenidoUsr.innerHTML =
        `
        <div class="grid-item-usr leftUsr ">
                        <div class="divUsr">
                        <p class=""><img class="img-circle" src="${data.results[0].picture.large}"></p>
                        <span class="usuario-Nombre-txt">Hola, ${data.results[0].name.first}</span><br>
                        
                        <span class="material-icons md-24">email</span>
                        <span class="dispositivo-Serial-txt">
                        
                        ${data.results[0].email}</span>
                        </p>
                       
                        </div>
                    

                        `
    }),
    fetch('https://raw.githubusercontent.com/FlopaMendez/HidroGrow-codo-a-codo/usuarios-dispositivos/HidroGrow/json/dispositivos.json')

      .then(res2 => res2.json())
      .then(data2 => {

        contenidoDevice.innerHTML =
          `
          <div class="grid-item-usr contenidoUsr">
                    <span class="dispositivo-Serial-txt">Número de serie: ${data2.dispositivos[0].serialNumber} </span>
                    <br>
                <span class="dispositivo-Titulo-txt">${data2.dispositivos[0].name} </span>
                <p>
                <span class="dispositivo-FechaInicio-txt">Fecha inicio del cultivo: ${data2.dispositivos[0].fechaInicio} </span>
                </p>
               
                <p class="dispositivo-Temperatura-txt">
               
                <span class="material-icons md-48">device_thermostat</span>
                ${data2.dispositivos[0].temperatura[0]}°C 
            
                <span class="material-icons md-48">vaccines</span> ${data2.dispositivos[0].ph[0]}ph</span>
                
                </div>
                        `
                        
      }),

      listaDispositivos.innerHTML =
                        `
                        <div class="grid-item-usr ">
                        <span class="dispositivo-Serial-txt">  <span class="material-icons md-48">settings</span> Agregar nuevo dispositivo</span>
                        
                                  
                        </div>
              
                        
                              
                                      `


     



}



const div = document.querySelector('div')

document.querySelector('.hide').addEventListener('click', () => {
  div.classList.add('div_hide')
  let stateObj = { id: "100" };
  window.history.pushState(stateObj,
    "HidroGrow - Dashboard de usuario", "/HidroGrow/dashboard-usr.html");
})

document.querySelector('.show').addEventListener('click', () => {
  div.classList.remove('div_hide')
})



function signOut(){
  let estado = document.getElementsByClassName("link sign-in")
  estado[0].innerHTML = "CERRAR SESION"
}













