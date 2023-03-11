const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({
  about_author: {
    type: String,
  },
  author_note: {
    type: String,
  },
  contact_me: {
    type: String,
  },
  keywords: {
    type: Array,
  }
},{
    timestamps:true,
});
