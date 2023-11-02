const jwt = require('jsonwebtoken')
const config = require('../../config');
const User = require('../../components/user/model');
const Role = require('../../components/role/model');

exports.verify_token = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']
        if (!token) {
            return res.status(403).json({message: 'No existe token ingresado'})
        }
        const decoded = jwt.verify(token, config.SECRET)
        req.user_id = decoded.id
        const user = await User.findById(decoded.id)
        if (!user) {
            return res.status(404).json({message: 'No existe un usuario'})
        }
        
        next()
    } catch(error) {
        console.log(error)
        return res.status(401).json({message: 'No Autorizado'})
    }
}
exports.is_admin = async (req, res, next) => {  
    const user = await User.findById(req.user_id)
    console.log('devuelve '+user.roles)
  
   /* const roles = await Role.find({_id: {$in: user.roles[1].role}}) 
    console.log('tiene '+roles) */

    for (const roleObject of user.roles) {
        const rol = await Role.find({_id: {$in: roleObject.role}}) 
        console.log('tiene '+rol) 
        if (rol.length > 0) {
            const roleName = rol[0].name;  
            if (roleName == 'admin') {
                console.log('iGUAL ENTR0 '+rol.name ) 
                next()
                return  
            }
          } 
    }


/*
    if (roles.length > 0) {
        const roleName = roles[0].name;  
        if (roleName == 'admin') {
            console.log('iGUAL ENTR0 '+roles.name ) 
            next()
            return  
        }
      }  */
      return res.status(403).json({message: 'Requiere rol de Admin.'})     
    }
 
   