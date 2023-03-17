const express = require("express");
const router = express.Router();
const { addGroup, sendMails, viewGroups } = require("../controllers/user");

router.post("/addgroup", addGroup);
router.post("/sendmail", sendMails);
router.get("/viewgroups", viewGroups);

module.exports = router;
