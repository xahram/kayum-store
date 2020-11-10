const AdminBro = require('admin-bro');
const { buildAuthenticatedRouter } = require('@admin-bro/express');
const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const User = require('../models/User');

// Build the admin router & Authticate that route
const buildAdminRouter = (admin) => {
  const router = buildAuthenticatedRouter(
    admin,
    {
      // cookies information
      cookieName: process.env.COOKIE_NAME,
      cookiePassword: process.env.COOKIE_SCCRET,
      // Check the user is admin or not
      authenticate: async (email, password) => {
        // find the user in the database
        const user = await User.findOne({ email }).select(
          'password email role'
        );
        if (user && user.role === 'admin') {
          // Compare the the encrypt password
          const matched = await bcrypt.compare(password, user.password);

          // if password match then log in
          if (matched) {
            return user;
          }
        }
        return false;
      },
    },
    null,
    {
      

      resave: false,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    }
  );

  return router;
};

module.exports = buildAdminRouter;
