const express = require('express')
const router = express.Router()
const { ajouterHotel, recupereHotels } = require('../controllers/hotelControllers')
const upload = require('../middlewares/upload')
const authentif = require('../middlewares/authentifMiddlewares')

router.post('/ajout', authentif, upload.single('image'), ajouterHotel)

router.get('/hotels', authentif, recupereHotels)

module.exports = router
