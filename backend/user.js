let Mongoose = require('mongoose');

let validator = require('validator');

let userSchema = new Mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    password: String
})

module.exports = Mongoose.model('User', userSchema)

