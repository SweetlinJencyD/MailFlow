const express = require("express");
const router = express.Router();
const {
  addGroup,
  sendMails,
  viewGroups,
  deleteGroup,
} = require("../controllers/user");
const { protect } = require("../middlewares/auth");

router.post("/addgroup", protect, addGroup);
router.post("/sendmail", protect, sendMails);
router.post("/deletegroup/:id", deleteGroup);
router.get("/viewgroups", protect, viewGroups);

module.exports = router;
