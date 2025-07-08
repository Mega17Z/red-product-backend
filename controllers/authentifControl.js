const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.inscription = async (req, res) => {
    const { nom, email, motdepasse } = req.body;

    try{
        const userExiste = await User.findOne({ email })
        if (userExiste) return res.status(400).json({ message: "L'utilisateur existe déja" })

        const hashMotdepasse = await bcrypt.hash(motdepasse, 10)
        const user = await User.create({ nom, email, motdepasse: hashMotdepasse })
        res.status(201).json({ message: "Utilisateur Inscrit", token, user: { id: user._id, email: user.email, nom: user.nom } })
    } catch (erreur) {
        console.log('Erreur serveur', erreur)
        res.status(500).json({ message: 'Erreur Serveur' })
    }
}

exports.connexion = async (req, res) => {
    const { email, motdepasse } = req.body;
    try{
        const user = await User.findOne({ email })
        if(!user) return res.status(400).json({ message: "Utilisateur introuvable" })

        const compareMdp = await bcrypt.compare(motdepasse, user.motdepasse)
        if(!compareMdp) return res.status(400).json({ message: "Mot de passe Incorrect" })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: '1d'})
        // res.status({ token, user: { id: user._id, email: user.email, nom: user.nom} }):
        res.status(200).json({ token, user: { id: user._id, email: user.email, nom: user.nom } });
    } catch (erreur) {
        res.status(500).json({ message: "Erreur Serveur" })
    }
}

// exports.passOublier = async (req, res) => {
//     const { email } = req.body;
//     try{
//         const user = await User.findOne({ email })
//         if(!user) res.status(404).json({ message: "Utilisateur non trouvé"})
        

//     } catch (erreur) {
//         res.status(500).json({ message : "Erreur Serveur"})
//     }
// }
