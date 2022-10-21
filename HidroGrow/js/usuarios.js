

const app = new Vue({
    el: '#app',
    data: {
        info: {},
        dispositivos:[]
    },
    created() {

        //fetch('json/dispositivos.json')
        fetch('https://raw.githubusercontent.com/FlopaMendez/HidroGrow-codo-a-codo/usuarios-dispositivos/HidroGrow/json/dispositivos.json')
        
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            this.info=data
            this.dispositivos=data.dispositivos
            })
        .catch( error => console.log(error));
    }
});