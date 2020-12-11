require('dotenv').config()

const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const connect = () => {
    mongoose.connect(MONGO_URI,
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