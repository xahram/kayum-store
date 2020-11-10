const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc      create Super user
// @route     GET /api/v1/make/superuser
// @access    Public
exports.createSuper = asyncHandler(async (req, res, next) => {
  const user = User.create({
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@admin.com',
    role: 'admin',
    country: 'USA',
    username: 'al',
    address: 'Bostan',
    password: '123456',
  });

  res.status(200).json({ message: 'user created' });
});
