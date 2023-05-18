const express = require("express");
const routes = express.Router();
const { createUser } = require("../controllers/user.controller");

// Endpoint para recibir los datos de los usuarios

routes.post("/", createUser);

module.exports = routes;
