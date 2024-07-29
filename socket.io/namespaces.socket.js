const namespaceModel = require("./../models/Chat");

exports.initConnections = async (io) => {
  io.on("connection", async (socket) => {
    const namespaces = await namespaceModel.find({}).sort({ _id: -1 });
    socket.emit("namespaces", namespaces);
  });
};

exports.getNamespacesRooms = async (io) => {
  const namespaces = await namespaceModel.find({}).lean();
  namespaces.forEach((namespace) => {
    io.of(namespace.href).on("connection", (socket) => {
      socket.emit("namespaceRooms", namespace.rooms);
    });
  });
};
