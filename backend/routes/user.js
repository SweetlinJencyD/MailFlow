const express = require("express");
const router = express.Router();
const {
  addGroup,
  sendMails,
  viewGroups,
  deleteGroup,
  sentDetails,
  newTemplate,
  deleteTemplate,
  viewTemplates,
} = require("../controllers/user");
const { protect } = require("../middlewares/auth");

router.post("/addgroup", protect, addGroup);
router.post("/sendmail", protect, sendMails);
router.post("/deletegroup/:id", deleteGroup);
router.post("/newtemplate", protect, newTemplate);
router.post("/deletetemplate/:id", deleteTemplate);
router.get("/viewtemplates", protect, viewTemplates);
router.get("/viewgroups", protect, viewGroups);
router.get("/sentdetails", protect, sentDetails);

module.exports = router;
