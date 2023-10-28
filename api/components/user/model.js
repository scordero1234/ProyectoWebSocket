const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}
const role_schema = new Schema({
    role: {
        type: Schema.ObjectId,
        ref: 'role',
    },    
} )


const user_schema = new Schema({
    username: req_string,
    email: req_string,
    password: req_string, 
    roles: [role_schema]
    }, {
    timestamps: true,
    versionKey: false
}) 

user_schema.statics.encrypted_password = (password) => {
    const salt = bcryptjs.genSaltSync()
    return bcryptjs.hashSync(password, salt)
}

user_schema.statics.compare_password = (password, received_password) => {
    return bcryptjs.compareSync(password, received_password)
}
 
const model = mongoose.model('user', user_schema)
module.exports = model