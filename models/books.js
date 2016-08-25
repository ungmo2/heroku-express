var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var booksSchema = new Schema({
  title          : String,
  author         : String,
  published_date : { type: Date, default: Date.now  }
});

module.exports = mongoose.model('books', bookSchema);
