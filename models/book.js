const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create book schema
const bookSchema = new Schema({
  title: String,
  author: String,
  synopsis: String,
  date: {
    type: Date,
    default: Date.now
  }
});

// Using schema to create new model
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;