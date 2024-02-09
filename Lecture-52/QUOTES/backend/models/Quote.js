const mongoose = require("mongoose");

let quoteSchema = new mongoose.Schema({
  author: {
    type: String,
    trim: true,
    required: true,
  },
  text: {
    type: String,
    trim: true,
    required: true,
  },
});

let Quotes = mongoose.model("Quote", quoteSchema);

module.exports = Quotes;
