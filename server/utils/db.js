const mongoose = require("mongoose");
// const URI = 'mongodb://127.0.0.1:27017/FME'

const URI = process.env.MONGODB_URI;


// mongoose.connect(URI);
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successful to DB!");
  } catch (error) {
    console.log("Database Connection Failed");
    process.exit(0);
  }
};

module.exports = connectDb;

// mongodb://localhost:27017
