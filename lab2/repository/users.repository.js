const userModel = require("../models/users.model");

async function save(payload) {
  return await userModel.create(payload);
}
module.exports = {
  save,
};
