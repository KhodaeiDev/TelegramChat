const { initConnections, getNamespacesRooms } = require("./namespaces.socket");

const socketHandller = (io) => {
  initConnections(io), getNamespacesRooms(io);
};

module.exports = socketHandller;
