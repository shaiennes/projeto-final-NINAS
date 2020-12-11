require('dotenv').config()

const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI ||
    'mongodb://localhost:27017/vitrine'

const connect = () => {
    mongoose.connect(MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        .then(() => console.log('MongoDB conectado!'))
        .catch((err) => console.log(err))

}

module.exports = { connect }