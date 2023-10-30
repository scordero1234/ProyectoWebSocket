const empresa = require('../components/empresa/interface') 
const representantelegal = require('../components/representantelegal/interface')
const user = require('../components/user/interface')
const role = require('../components/role/interface')
const authRoutes = require('../src/routes/auth.routes')
const routes = function(server) { 
    server.use('/empresa', empresa)
    server.use('/representantelegal', representantelegal)
    server.use('/user', user)
    server.use('/role', role) 
    server.use('/auth', authRoutes)
}

module.exports = routes