const mongoose = require("mongoose");

const category = new mongoose.Schema(
  {
    category_name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Category',category)