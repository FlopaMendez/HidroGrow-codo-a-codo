var contenidoUsr = document.querySelector('#contenidoUsr');
var contenidoDevice = document.querySelector('#contenidoDevice');

function traer() {

  fetch('https://randomuser.me/api/')

    .then(res => res.json())
    .then(data => {
      contenidoUsr.innerHTML =
        `
                        <div class="divUsr">
                        <img class="imgUsr" src="${data.results[0].picture.large}"  >
                        <p>Nombre: ${data.results[0].name.first}<br>
                        Email: ${data.results[0].email}</p>
                        <br>
                        </div>
                        `
    }),
    fetch('https://raw.githubusercontent.com/FlopaMendez/HidroGrow-codo-a-codo/usuarios-dispositivos/HidroGrow/json/dispositivos.json')

      .then(res2 => res2.json())
      .then(data2 => {

        contenidoDevice.innerHTML =
          `
                    <p>UNIDADES DE CULTIVO</p>
                <h1 >${data2.dispositivos[0].name} </h1>
                <h2>Temperatura: ${data2.dispositivos[0].temperatura[0]}°C</h2>
                <h2>PH: ${data2.dispositivos[0].ph[0]}</h2>
                <p>Número de serie: ${data2.dispositivos[0].serialNumber} </p>
                <p>Fecha inicio del cultivo: ${data2.dispositivos[0].fechaInicio} </p>
                        `
      })



}



const div = document.querySelector('div')

document.querySelector('.hide').addEventListener('click', () => {
  div.classList.add('div_hide')
})

document.querySelector('.show').addEventListener('click', () => {
  div.classList.remove('div_hide')
})



function signOut(){
  let estado = document.getElementsByClassName("link sign-in")
  estado[0].innerHTML = "CERRAR SESION"
}












