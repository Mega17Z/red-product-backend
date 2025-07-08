const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nom: String,
    email: {type: String, required: true, unique: true},
    motdepasse: {type: String, required: true}
})

module.exports = mongoose.model('User', UserSchema)