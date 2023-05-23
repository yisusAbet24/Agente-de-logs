const { getSocket } = require("../socket");
const { save } = require("../repository/users.repository");
const { encriptPassword } = require("../utils/encryption");
const io = require("socket.io-client");
const socket = io.connect("http://localhost:3000");

async function createUser(req, res) {
  try {
    const io = await getSocket();
    let { user, pass, name } = req.body;

    pass = await encriptPassword(pass);

    const data = {
      user, 
      pass,
      name
    }

    save(data)
      .then((data) =>
        res.status(201).json({
          status: 201,
          success: true,
          message: "Usuario registrado exitosamente",
          data,
        })
      )
      .catch((error) => {
        res.status(500).send("Error interno del servidor");
      });
    // Emitir un evento al socket.io
    const msg = { message: "Nuevo usuario registrado", level: "alta" };

    socket.emit('payload', msg);
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res
      .status(500)
      .json({ success: false, error: "Error al registrar usuario" });
  }
}

module.exports = { createUser };
