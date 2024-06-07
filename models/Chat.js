const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const roomSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    messages: {
      type: [chatSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const namespaceSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  room: {
    type: [roomSchema],
    default: [],
  },
});

const model = mongoose.model("Namespace", namespaceSchema);
