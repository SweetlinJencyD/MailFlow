const Group = require("../Models/Group");
const { sendMail } = require("../services/mail");

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

const viewGroups = async (req, res) => {
  const groups = await Group.find();
  if (!groups)
    return res.status(500).send({ success: false, message: "No groups found" });
  res
    .status(200)
    .send({ success: true, message: "successfully fetched the data.", groups });
};

const sendMails = async (req, res) => {
  const group = await Group.findById(req.body.group);
  if (!group)
    return res.status(404).send({ success: false, message: "Group not found" });
  const send = await sendMail(group.emails, req.body.subject, req.body.message);
  res.status(200).send({ success: true, message: "successfully send" });
};

module.exports = { addGroup, sendMails, viewGroups };
