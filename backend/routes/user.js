const express = require("express");
const router = express.Router();
const {
  addGroup,
  sendMails,
  viewGroups,
  deleteGroup,
} = require("../controllers/user");

router.post("/addgroup", addGroup);
router.post("/sendmail", sendMails);
router.post("/deletegroup/:id", deleteGroup);
router.get("/viewgroups", viewGroups);

module.exports = router;
