const jwt = require('jsonwebtoken');
const User = require('../../components/user/model');
const config = require('../../config'); 
/*import jwt from 'jsonwebtoken'
 
import User from '../../components/user/model'
import config from '../config'
*/

 
//export const sign_in = async (req, res) => {
module.exports.sign_in = async (req, res) => {
    try {
        // Se busca al usuario en la BD a traves del correo
        const user_found = await User.findOne({email: req.body.email})

        if (!user_found) {
            return res.status(400).json( {message: 'User not found'} )
        }
        // Se verifica el password ingresado en el formulario vs. el password encriptado en la BD
        const verify_password = User.compare_password(req.body.password, user_found.password)
        
        if (!verify_password) {
            return res.status(401).json({token: null, message: 'Password invalido'})
        }
        // Creacion del token para comunicacion autenticada.
        const token = jwt.sign({id: user_found._id}, config.SECRET, {
            expiresIn: 86400 // 24 horas
        })
        res.status(200).json({token: token})
    } catch(error) {
        console.error( error )
        return res.status(500).json({token: null, message: 'Internal server error'});
    }
}