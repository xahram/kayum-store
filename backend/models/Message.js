const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter email'],
    },
    phoneno: {
      type: String,
     // required: [true, 'Please enter phone'],
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
      required: [true, 'Please add message'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
