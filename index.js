const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDb = require('./config/db')
const authentifRoutes = require('./routes/authentifRoutes')
const ajoutHotelRoutes = require('./routes/hotelRoutes')

dotenv.config()
connectDb()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authentifRoutes)
app.use('/api', ajoutHotelRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Serveur lancer au port ${PORT}`))