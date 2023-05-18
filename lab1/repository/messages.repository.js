const messageModel = require("../models/message.model")

async function save(payload){
    return await messageModel.create(payload)
}
module.exports={
    save,
}