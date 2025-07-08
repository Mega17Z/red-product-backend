const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
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
app.use('/uploads', express.static('uploads'))

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Serveur lancer au port ${PORT}`))