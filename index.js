const express = require("express");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 3000;
// app de express
const app = express();

// Node Server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);

require("./sockets/socket");

// path publico

const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`servidor corriendo ${port}`);
});
