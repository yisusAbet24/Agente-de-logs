let io = null

async function initialSocket(server) {
    io = require("socket.io")(server)
    return io
}

async function getSocket() {
    return io
}

module.exports = {
    initialSocket,
    getSocket
}

