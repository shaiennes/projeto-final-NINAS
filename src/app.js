require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors()) 

const routesNinas = require('./routes/ninasRoute')
const routesIndex = require('./routes/index')
app.use(express.json())

const db = require('./configs/database')
db.connect()


       app.use('/ninas', routesNinas)
    app.use('/index', routesIndex)

module.exports = app