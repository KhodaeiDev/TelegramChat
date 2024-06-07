const express = require("express");
const nameSpaceController = require("../controllers/nameSpace");
const router = express.Router();

router.get("/", nameSpaceController.getAll);
router.post("/", nameSpaceController.create);

module.exports = router;
