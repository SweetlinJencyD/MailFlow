const Group = require("../Models/Group");

const addGroup = async (req, res) => {
  const group = new Group({
    name: req.body.name,
    emails: req.body.emails,
  });
  if (!group)
    return res
      .status(400)
      .send({ success: false, message: "Failed to add group" });
  const result = await group.save();
  if (!result)
    return res
      .status(400)
      .send({ success: false, message: "Failed to add group" });
  res
    .status(200)
    .send({ success: true, message: "Successfully added the group" });
};

module.exports = { addGroup };
