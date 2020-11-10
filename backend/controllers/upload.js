const asyncHandler = require('../middleware/async');

// @desc     upload the photo
// @route    POST /api/v1/upload
// @access   Private
exports.uploadphoto = asyncHandler((req, res, next) => {
  res.status(200).json({ path: `/${req.file.path}}` });
});
