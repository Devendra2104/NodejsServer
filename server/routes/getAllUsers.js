const express = require("express");
const router = express.Router();
const handleGetAllUsersController = require("../controllers/getAllUser.js");

router.get("/", handleGetAllUsersController);

module.exports = router;
