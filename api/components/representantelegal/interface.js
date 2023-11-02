const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')
const routes = express.Router()

const auth_jwt = require('../../src/middlewares'); 

routes.post('/', auth_jwt.verify_token, auth_jwt.is_admin, function(req, res){
    controller.agregarRepresentante( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 400) )
})

routes.get('/', auth_jwt.verify_token, function(req, res){
    const filtro = req.query.ruc || null
    controller.obtenerRepresentante( filtro )
        .then( (data) => response.success(req, res, data, 200) )
      
})

routes.patch('/', function(req, res){
    controller.actualizarRepresentante( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 400) )
})

routes.delete('/', function(req, res){
    controller.eliminarRepresentante( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 400) )
})

module.exports = routes