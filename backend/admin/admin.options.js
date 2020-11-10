const Adminbro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');
const User = require('../models/User');
const Supller = require('../models/Supler');
const Order = require('../models/Order');
const Message = require('../models/Message');

Adminbro.registerAdapter(AdminBroMongoose);

const AdminProduct = require('./admin.product');

const options = {
  // Company brand options
  branding: {
    companyName: 'KUYAM STORE',
    softwareBrothers: false,
    
  },
  // Modal of database
  resources: [AdminProduct, Supller, Order, User, Message],
  // dashboard
  dashboard: {
    handler: async () => {},
    component: Adminbro.bundle('./components/my-dashboard-component'),
  },
  // Change the admin login text
  locale: {
    translations: {
      messages: {
        loginWelcome:
          'KUYAM STORE is a shop where you can find the high qaunlity thing. We alway focus on the qaunlity and also try keep our standard high. ',
      },
    },
  },
};

module.exports = options;
