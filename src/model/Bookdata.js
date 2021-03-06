//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.xrhgc.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//Schema definition
const Schema = mongoose.Schema;
//for single book
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

//Model creation
var Bookdata = mongoose.model('bookdata', BookSchema);
module.exports = Bookdata;