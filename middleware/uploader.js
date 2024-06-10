const multer = require("multer");
const path = require("path");
const fs = require("fs");

exports.multerStorage = (destination, allowedTypes = /png|jpeg|jpg|webp/) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destination);
    },
    filename: function (req, file, cb) {
      const filename = Math.floor(Math.random() * 99999);
      const extname = path.extname(file.originalname);
      cb(null, `${filename}${extname}`);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (allowedTypes.test(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(`File type Not allowed Please Add ${allowedTypes} file types`)
      );
    }
  };

  const uploader = multer({
    storage,
    limits: {
      fileSize: 50_000_000, //5 MB
    },
    fileFilter,
  });

  return uploader;
};
