const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require("./controllers/post");
server.use("/post", postRoutes);

// Root route
server.get("/", (req, res) => res.send("Hello, Posters!"));

module.exports = server;
