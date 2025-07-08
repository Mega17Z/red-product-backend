const Hotel = require('../models/Hotel')
const path = require('path')

exports.ajouterHotel = async (req, res) => {
    try{
        const { nom, adresse, email, numero, prix, devise } = req.body
        const image = req.file ? req.file.filename : null

        if(!nom || !adresse || !prix || !devise){
            return res.status(400).json({ message: "Certains obligatoires non remplie" })
        }

    
        const nouveauHotel = await Hotel.create({ nom, adresse, email, numero, prix, devise, image })
        res.status(201).json(nouveauHotel)
    } catch(erreur){
        res.status(500).json({message: "Erreur Serveur"})
    }
}

exports.recupereHotels = async (req, res) => {
    try{
        const hotels = await Hotel.find().sort({ createADt: -1 })
        res.status(200).json(hotels)
    } catch (erreur) {
        res.status(500).json({ message : 'Erreur lors de la recuperation des hotels' })
    }
}