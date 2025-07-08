const express = require('express')
const router = express.Router()
const { inscription, connexion } = require('../controllers/authentifControl')

router.post('/inscription', inscription)
router.post('/connexion', connexion)

module.exports = router