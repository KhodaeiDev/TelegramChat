const namespaceModel = require("./../models/Chat");

exports.initConnections = async (io) => {
  io.on("connection", async (socket) => {
    const namespaces = await namespaceModel.find({}).sort({ _id: -1 });
    socket.emit("namespaces", namespaces);
  });
};
