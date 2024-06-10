const express = require("express");
const namespaceController = require("../controllers/nameSpace");
const { multerStorage } = require("./../middleware/uploader");

const router = express.Router();

const upload = multerStorage("public/room");

router.get("/", namespaceController.getAll);
router.post("/", namespaceController.create);
router.post("/room", upload.single("media"), namespaceController.createRoom);

module.exports = router;
