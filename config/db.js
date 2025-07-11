const mongoose = require('mongoose')

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb connecté")
    }
    catch (erreur) {
        console.log(erreur.message)
        process.exit(1)
    }
}

module.exports = connectDb