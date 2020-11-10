const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const AdminBro = require('admin-bro');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

// Load env vars
/**
 * __dirname means?
 * __dirname is for get the complete path for example /home/user-theepa/Desktop/kuyam-store
 *
 * */
dotenv.config({ path: `${__dirname}/./config/config.env` });

// bring the middleware
const errorHandle = require('./middleware/error');

// Database file
const connectDB = require('./config/db');

// Admin file
const options = require('./admin/admin.options');
const buildAdminRouter = require('./admin/admin.route');

// routes files
const uploadsFile = require('./routes/upload');
const productRoute = require('./routes/product');
const userRoute = require('./routes/auth');
const orderRoute = require('./routes/order');
const messageRoute = require('./routes/message');
const superUserRoute = require('./routes/superuser');

// initialize app
const app = express();

// Datebase connection
connectDB();

// Admin Config
const admin = new AdminBro(options);
const router = buildAdminRouter(admin);
app.use(admin.options.rootPath, router);

// body Parser
app.use(express.json());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
// app.use(helmet());

// Prevent XSS attacks
app.use(xss());


// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

//Enable Content Security Policy for loading Paypal/ Third-Party Scripts
// const { expressCspHeader, INLINE, NONE, SELF ,UNSAFE_URL} = require('express-csp-header');
// app.use(expressCspHeader({
//   directives: {
//     'default-src': [SELF],
//         'script-src': [SELF, INLINE,'paypal.com',"https://www.paypal.com/sdk/js?client-id=sb",UNSAFE_URL,"https://www.sandbox.paypal.com/xoplatform/logger/api/logger"],
//         'style-src': [SELF, INLINE,UNSAFE_URL],
//         'img-src': [SELF, UNSAFE_URL],
//         'worker-src': [UNSAFE_URL],
//         'block-all-mixed-content': true
//     // 'default-src': [SELF],
//     //     'script-src': [SELF, INLINE, 'paypal.com'],
//     //     'style-src': [SELF, 'kuyam-store.herokuapp.com'],
        
//   }
// }));

// Enable CORS
app.use(cors());

// Log for development
if (process.env.NODE_ENV === 'developmemt') {
  app.use(morgan('dev'));
}

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../frontend/build')));


// Mount the Routes
app.use('/api/v1/upload', uploadsFile);
app.use('/api/v1/products', productRoute);
app.use('/api/v1/auth', userRoute);
app.use('/api/v1/orders', orderRoute);
app.use('/api/v1/message', messageRoute);
app.use('/api/v1/make/superuser', superUserRoute);

// Error Middleware
app.use(errorHandle);

// Create the Port
const PORT = process.env.PORT;


// Server run on http
app.listen(PORT, () =>
  console.log(
    `Server running om ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
);

// Handle unhandle promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
});


// // build comment heroku push
// const path = require('path')


// app.use(express.static('frontend/build'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + 'frontend/build/index.html'));
});
