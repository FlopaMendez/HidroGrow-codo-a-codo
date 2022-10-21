var contenidoUsr = document.querySelector('#contenidoUsr');
var contenidoDevice = document.querySelector('#contenidoDevice');

function traer() {

    fetch('https://randomuser.me/api/') 

        .then(res => res.json())
        .then(data => {
            contenidoUsr.innerHTML =
                `
                        <p></p>
                        <img class="img-circle" src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
                        <p>Nombre: ${data.results[0].name.first}</p>
                        <p>Email: ${data.results[0].email}</p>
                        <br>

                        `
        }),
        fetch('https://raw.githubusercontent.com/FlopaMendez/HidroGrow-codo-a-codo/usuarios-dispositivos/HidroGrow/json/dispositivos.json') 

            .then(res2 => res2.json())
            .then(data2 => {

                contenidoDevice.innerHTML =
                    `
                    <p>UNIDADES DE CULTIVO</p>
                <h1>${data2.dispositivos[0].name} </h1>
                <p>Número de serie: ${data2.dispositivos[0].serialNumber} </p>
                <p>Fecha inicio del cultivo: ${data2.dispositivos[0].fechaInicio} </p>
                <h2>Temperatura: ${data2.dispositivos[0].temperatura[0]}°C</h2>
                <h2>Variación de PH: ${data2.dispositivos[0].ph[0]}</h2>
                        `
            })



}



const div = document.querySelector('div')

document.querySelector('.hide').addEventListener('click',() => {
  div.classList.add('div_hide')
})

document.querySelector('.show').addEventListener('click',() => {
  div.classList.remove('div_hide')
})
















