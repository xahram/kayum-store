const mongoose = require('mongoose');

const supllerSchema = new mongoose.Schema(
  {
    
    supplierName: {
      type: String,
      required: [true, 'Please add supplier name'],
    },
    productName: {
      type: String,
      required: [true, 'Please add product name'],
    },
    qty: {
      type: String,
      required: [true, 'Please quanity'],
    },
    phone: {
      type: String,
      required: 'Please entter address',
    },
    email: {
      type: String,
      required: [true, 'Please add email'],
    },
    address: {
      type: String,
      required: [true, 'Please add address'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Supller', supllerSchema);
