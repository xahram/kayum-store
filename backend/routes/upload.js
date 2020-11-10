const express = require('express');
const multer = require('multer');
const shortId = require('shortid');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `photo_${shortId.generate()}.jpg`);
  },
});

const upload = multer({ storage });

const router = express.Router();
const { uploadphoto } = require('../controllers/upload');

router.post('/', upload.single('image'), uploadphoto);

module.exports = router;
