const Model = require('./model')
const user = require('../user/model')
 
async function agregarUser( dato ) {
    const resultado = await new Model( dato )
    return resultado.save()
}  

async function obtenerUser( filtro ) {
    let mi_filtro = {}
    const resultado = await Model.find( mi_filtro )
    return resultado
}

 
module.exports = {
    agregar:agregarUser,
    obtener:obtenerUser
}