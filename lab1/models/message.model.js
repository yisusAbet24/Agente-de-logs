const mongoose = require("../connection/db")

const schema = mongoose.Schema
const msg = new schema({
    message: {type: String, require: true},
    level: {type: String, require: true}
})
module.exports = mongoose.model("messages", msg)
