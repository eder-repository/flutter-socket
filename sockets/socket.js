const { io } = require("../index");

// mensaje de sockets
io.on("connection", (client) => {
  console.log("cliente conectado");
  client.on("disconnect", () => {
    console.log("cliente desconectado");
  });

  client.on("mensaje", (payload) => {
    console.log("Mensajee!!!", payload);

    io.emit("mensaje", { admin: "Nuevo mensaje" });
  });
});
