const storage = require('./storage')

function agregarRole( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}
 
function obtenerRole( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}

module.exports = {
    agregarRole,
    obtenerRole  
}