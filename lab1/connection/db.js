require("dotenv").config();
const mongoose = require('mongoose');


mongoose.set("strictQuery", true);

let dots = 0;
const interval = setInterval(() => {
  dots = (dots + 1) % 4; 
  const message = `connecting to the database${'.'.repeat(dots)}`;
  console.log(message);
}, 2000); 

mongoose
  /*Mongo Atlas*/
  .connect(process.env.MONGODB_URL)
  .then(() => {
    clearInterval(interval); 
    console.log("BD connected");
  })
  .catch((error) => {
    clearInterval(interval); 
    console.error(error);
  });


module.exports = mongoose;
