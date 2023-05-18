const mongoose = require("../connection/db");

const schema = mongoose.Schema;
const user = new schema({
  user: { type: String, require: true },
  pass: { type: String, require: true },
  name: { type: String, require: true },
});
module.exports = mongoose.model("userC2", user);
