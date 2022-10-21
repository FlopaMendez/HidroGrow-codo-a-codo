console.clear()

const getNombreAxios = async(idPost) => {
    console.log("DISPOSITIVOS")

    const resJson = await axios(`https://mockend.com/pabloalustiza/materialdesign/Dispositivo/${idPost}`)
    console.log("idUser:",resJson.data.id)
    console.log("PH:", resJson.data.ph)
    console.log("Temperatura:",resJson.data.temperatura)
    console.log("Fecha Inicio Cultivo:",resJson.data.fechaInicio)
    console.log("Número de serie del dispositivo:",resJson.data.serialNumber)
    console.log("Contraseña del dispositivo:",resJson.data.password)



    console.log("USUARIOS")
    const userJson = await axios(`http://jsonplaceholder.typicode.com/users/${resJson.data.id}`)
    console.log("Nombre:",userJson.data.name)
    console.log("Email:",userJson.data.email)

}

getNombreAxios(1)

nombrePrueba = "Pablo"


const usuariosHidrogrow = Vue.createApp({
    data() {
        return {

            name: 'flor@gmail.com',
            email: 'flor@gmail.com',
            id: '001',
            serialNumber: 'xxx',
            password:'xxx',
            fechaInicio:'xxx',
            ph:'xxx',
            temperatura:'xxx'



        }
    },
    computed: {
        getNombreCompleto() {
            return this.name;
        }
    }
}).mount('#usuariosHidrogrow')

