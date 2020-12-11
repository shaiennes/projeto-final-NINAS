const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ninasSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    
},

    { collection: 'ninas' }

);


const ninasCollections = mongoose.model(' ninas', ninasSchema)

module.exports = ninasCollections