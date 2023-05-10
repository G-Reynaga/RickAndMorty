const express = require("express");
const router = express.Router();
const { getCharDetail } = require("../Controllers/getCharDetail");
const { getAllChar } = require("../Controllers/getAllChar");

router.get("/", getAllChar);
router.get("/:id", getCharDetail);

module.exports = router;
