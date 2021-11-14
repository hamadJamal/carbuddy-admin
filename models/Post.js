const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  Price: {
    type: String,
    required: true,
  },
  Currency: String,
  Distance: String,
  Time: String,
});

module.exports = mongoose.model("Charges", PostSchema);
