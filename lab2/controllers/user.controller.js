const { getSocket } = require("../socket");
const { save } = require("../repository/users.repository");

async function createUser(req, res) {
  try {
    const io = await getSocket();
    const data = req.body;
    save(data)
      .then((data) =>
        res
          .status(201)
          .json({
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
    io.emit("newUser", { message: "Nuevo usuario registrado", level: "alta" });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res
      .status(500)
      .json({ success: false, error: "Error al registrar usuario" });
  }
}

module.exports = { createUser };
