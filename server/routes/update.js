const express = require("express");
const router = express.Router();
const updateController = require("../controllers/updateController.js");

router.put("/", updateController.handleUpdate);

module.exports = router;
