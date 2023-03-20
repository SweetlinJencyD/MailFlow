const Group = require("../Models/Group");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const { sendMail } = require("../services/mail");
const generateToken = require("../utils/generateToken");

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

const deleteGroup = async (req, res) => {
  const group = await Group.findByIdAndDelete(req.params.id);
  if (!group)
    return res
      .status(404)
      .send({ success: false, message: "Failed to delete the group" });
  res
    .status(200)
    .send({ success: true, message: "Group deleted successfully" });
};

const register = async (req, res) => {
  console.log(req.body);
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  if (!user)
    return res
      .status(400)
      .send({ success: false, message: "Registration failed!" });
  const result = await user.save();
  if (!result)
    return res
      .status(500)
      .send({ success: false, message: "Registration failed!" });
  res.status(200).send({ success: true, message: "Registration successfull" });
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(400)
      .send({ success: false, message: "Incorrect password or email" });
  if (!bcrypt.compareSync(req.body.password, user.password))
    return res
      .status(400)
      .send({ success: false, message: "Invalid username or password" });
  const token = generateToken(user.email);
  res.status(200).send({
    success: true,
    message: "Successfully loggedIn",
    token,
  });
};

module.exports = {
  addGroup,
  sendMails,
  viewGroups,
  deleteGroup,
  register,
  login,
};
