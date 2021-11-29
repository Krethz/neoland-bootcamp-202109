const {Schema} = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        validate: [
            {
                validator(username){
                    return username.lenght > 3
                },
                message: 'username too short'
            },
            {
                validator(username){
                    return !username.includes(' ')
                },
                message: 'username has white spaces'
            }
        ]
    },
    password: {
        type: String,
        required: true,
        validate: [
            {
                validator(password){
                    return password.length > 6
                },
                message: 'password too short'
            },
            {
                validator(password){
                    return !password.includes(' ')
                },
                message: 'password has white spaces'
            }
        ]
    }
})

module.exports = user