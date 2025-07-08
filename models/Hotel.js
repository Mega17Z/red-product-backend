const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    nom: {type: String, required: true},
    adresse: {type: String, required: true},
    email: {type: String},
    numero: {type: String},
    prix: {type: Number, required: true},
    devise: {type: String},
    image: {type: String},
    createAdt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Hotel', HotelSchema)