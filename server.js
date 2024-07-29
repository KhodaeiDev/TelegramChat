const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
const http = require("http");
const { socketConnection } = require("./utils/socketConnection");
const socketHandller = require("./socket.io/index");
dotenv.config();

//* Server Running
const startServer = () => {
  const PORT = process.env.PORT || 4003;
  const httpServer = http.createServer(app);
  const io = socketConnection(httpServer);
  socketHandller(io);
  httpServer.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
  });
};

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("Mongo DB Connected successfully");
  } catch (err) {
    console.log(`Error in DB connection : ${err}`);
  }
};

async function run() {
  startServer();
  await DBConnection();
}

run();
