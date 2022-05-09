const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongooseDB connected");
  } catch (err) {
    console.error(err.message);
    //exit with process failure
    process.exit(1);
  }
};

module.exports = connectDB;
