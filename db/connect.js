require('dotenv').config();
const mongoose = require('mongoose');

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      // Mongoose options can be omitted or customized if needed
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;
