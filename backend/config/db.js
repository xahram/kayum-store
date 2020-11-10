const mongoose = require('mongoose');

/**
 * Connect the data functin. this function connect mongoDB database
 *
 */
const connectDB = async () => {
  // conect function
  const conn = await mongoose.connect(process.env.MONGO_URI_DEV, {
    // This object make database faster and avoid the terminal error
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  // this log show that database is connectef
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

// Make the availible from using in server.js file
module.exports = connectDB;
