
const { Schema, model } = require('mongoose')
//un user va avea : email, parola , nume , prenume si rol


const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: 'user'
        }
    },
    {
        timestamps: true
    }

)

module.exports = model('users', userSchema)