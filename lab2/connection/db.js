require("dotenv").config();
const mongoose = require('mongoose');


mongoose.set("strictQuery", true);

mongoose
  /*Mongo Atlas*/
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("BD connected");
  })
  .catch((error) => {
    console.error(error);
  });


module.exports = mongoose;
