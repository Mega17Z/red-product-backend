const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        const ext = path.extname(file.originalname)
        const uniqueNom = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext;
        cb(null, uniqueNom)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image/')) {
        cb(null, true)
    } else {
        cb(new Error('Seules les images sont autorisées !'), false)
    }
}

module.exports = multer({storage, fileFilter})