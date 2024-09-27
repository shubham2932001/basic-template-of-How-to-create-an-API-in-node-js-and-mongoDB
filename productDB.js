



// is file mai hum DB mai data add krne k lie code llikh re h 



require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product"); 
const ProductJson = require("./products.json");

const start = async () => {
  try {
    // Connect to the MongoDB database
   // prosuctDB.js
await connectDB(process.env.MONGODB_URL || 'mongodb://localhost:27017/mydatabase');
await Product.deleteMany();
    
    // Insert the products from the JSON file into the database
    await Product.create(ProductJson);
    
    console.log("success");
  } catch (error) {
    console.error(error);
  }
};

start();
