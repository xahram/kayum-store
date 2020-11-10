const Product = require('../models/Product');
const uploadFeature = require('@admin-bro/upload');
const path = require('path');

const options = {
  // List Products items in products table
  listProperties: ['name', 'price', 'category', 'countInStock', 'rating'],
  properties: {
    description: {
      // Make the text formatter editors
      type: 'richtext',
    },
    image: {
      // hide the image image properties
      isVisible: {
        list: false,
        filter: false,
        show: true,
        edit: false,
        new: false,
      },
    },
    discountPrice: {
      // hide the discount properties propertry
      isVisible: {
        list: false,
        filter: false,
        show: true,
        edit: false,
        new: false,
      },
    },
    realPrice: {
      // Hide the real price properties
      isVisible: {
        list: false,
        filter: false,
        show: true,
        edit: false,
        new: false,
      },
    },
  },
};

module.exports = {
  resource: Product,
  features: [
    // upload the image fature
    uploadFeature({
      provider: { local: { bucket: path.join(__dirname, '../public') } },
      properties: {
        key: 'image',
        mimeType: 'mimeType',
      },
    }),
  ],
  options,
};
