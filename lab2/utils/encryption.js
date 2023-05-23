const bcrypt = require('bcrypt');

async function encriptPassword(password, rondasCifrado = 10) {
  try {
    const salt = await bcrypt.genSalt(rondasCifrado);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw new Error('Error al encriptar la contraseña');
  }
}



module.exports = {
  encriptPassword
};
