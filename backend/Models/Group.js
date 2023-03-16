const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emails: {
    type: Array,
  },
  //   userId: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //   },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
