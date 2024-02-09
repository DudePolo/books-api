// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI)
console.log('connected to mongo: ', process.env.MONGO_URI)
const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ROUTES
app.get('/', (req,res) => {
    res.json('hello world')
})

//CORS
app.get('/products/:id', cors(corsOptions), (req, res, next) => {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

//Books
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

//404 Page
app.get('*', (req, res) => {
    res.json('404')
})

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT, 'with CORS enabled')
})