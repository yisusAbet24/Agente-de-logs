const express = require("express");
const { initialSocket } = require("./socket");
const app = express();
const { message } = require("./services/messages.service");

require("dotenv").config();
app.use(express.json());

app.set("port", process.env.PORT || 8080);

const server = app.listen(app.get("port"), () =>
  console.log("server on port:", app.get("port"))
);

initialSocket(server).then((io) => {
  io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);
    socket.on("payload", message);
  });
});
