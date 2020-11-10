const asyncHandler = require('../middleware/async');
const Message = require('../models/Message');

// @describe      Send Message
// @route     POST /api/v1/message
// @access    Public
exports.postMessage = asyncHandler(async (req, res, next) => {
  // create the message
  const message = Message.create(req.body);

  // send the response
  res.status(201).json(message);
});
