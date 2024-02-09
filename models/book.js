//require mongoose
const mongoose = require('mongoose')
//creating shorthand for the Schema constructor
const { Schema } = mongoose

// schema
const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true},
    year: { type: Number, required: true },
    quantity: {type: Number, default: 0},
    imageURL: String
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book