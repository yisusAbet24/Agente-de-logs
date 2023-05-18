const { save } = require("../repository/messages.repository");

async function message(payload) {
  try {
    console.log({
      data: payload,
    });
    const response = await save(payload);
    console.log("payload guardado correctamente.");
    return response;
  } catch (error) {
    console.error("Ha ocurrido un error al guardar el payload:", error);
    throw error;
  }
}

module.exports = {
  message,
};
