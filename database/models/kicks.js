const mongoose = require("mongoose");
let Schema = new mongoose.Schema({
  Kicks: Array,
  User: String,
  Guild: String,
});
module.exports = mongoose.model("kicks", Schema);