const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();
//const DB_URL = "mongodb://localhost:27017/vitrine"  // nome da conexão
const DB_URI = process.env.DB_URI


const connect = () => {
    mongoose.connect(DB_URI, {useNewUrlParser:true}) // parametro para não receber erros // adiciona uma string para json
    const connection = mongoose.connection
    
    connection.on("error",()=> console.error("Erro ao conectar com o MongoDB"))
    connection.once("open", ()=> console.log("Conectamos no MongoDB"))
}

module.exports = {connect}