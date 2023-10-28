const Model = require('./model')
const role = require('../role/model')
 
async function agregarRole( dato ) {
    const resultado = await new Model( dato )
    return resultado.save()
}   

async function obtenerRole( filtro ) {
    let mi_filtro = {} 
    const resultado = await Model.find( mi_filtro )
    return resultado
}

 
module.exports = {
    agregar:agregarRole,
    obtener:obtenerRole 
}