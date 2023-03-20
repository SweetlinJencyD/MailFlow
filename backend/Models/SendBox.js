const mongoose = require("mongoose");

const sendBoxSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
    },
    subject: {
      type: String,
    },
  },
  { timestamp: true }
);

const SendBox = mongoose.model("SendBox", sendBoxSchema);

module.exports = SendBox;
