const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const role_Schema = new Schema({
    name: String
}, {
    versionKey: false
})

const model = mongoose.model('role', role_Schema)
module.exports = model