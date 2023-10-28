const storage = require('./storage')

function agregarUser( dato ) {
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