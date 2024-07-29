const socketIo = require("socket.io");

exports.socketConnection = (httpServer) => {
  const io = socketIo(httpServer, {
    cors: {
      origin: "*",
    },
  });
  return io;
};
