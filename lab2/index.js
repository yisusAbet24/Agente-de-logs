const express = require("express");
const { initialSocket } = require("./socket");
const app = express();
const routesUser = require("./routes/user.route");

require("dotenv").config();
app.use(express.json());
app.use('/users', routesUser);
app.set("port", process.env.PORT || 8080);


const server = app.listen(app.get("port"), () =>
  console.log("server on port:", app.get("port"))
);

initialSocket(server).then((io) => {
  io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);
  });
});
