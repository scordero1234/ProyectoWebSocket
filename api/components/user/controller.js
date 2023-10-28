const storage = require('./storage') 
const user = require('./model')

async function agregarUser( dato ) {
    dato.password = await user.encrypted_password(dato.password)
    console.log("tiene"+ dato.password)
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}

function obtenerUser( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}
 

module.exports = {
    agregarUser,
    obtenerUser
}