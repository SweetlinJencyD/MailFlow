const express = require("express");
const router = express.Router();
const { addGroup } = require("../controllers/user");

router.post("/addgroup", addGroup);

module.exports = router;
