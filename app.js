


/* 
require("dotenv").config();
const express = require('express');
const app = express();
const connect =require("./db/connect");
const port = process.env.PORT || 3000;



const products_routes = require("./routes/products");

app.get('/', (req, res) => { // route
  res.send("hii im live");
});


// middleware

app.use("/api/products", products_routes); // ye ek route define krdia ki pehle humm / pr gye ab /api/products pr koi route kre to vo products_routes iske data ko dekhega




const start = async () => { // Removed req, res
  try {
     await connect(process.env.MONGODB_URL); // database connection starts from here
// .env file mai uri li link add krne k baad hmne uri ko asa argument pass krdia const connectDB = (uri) =>{ isme aur yha  await connect(process.env.MONGODB_URL);    process.env.MONGODB_URL   as a argumment pass kia 

    

/*

uri = "mongodb+srv://Bhola293:Bhola293@#@cluster0.mx8e9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = () =>{

    return  mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false,
        poolSize: 50,
        bufferMaxEntries: 0,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        family: 4
    });
};



// ye  await connect(); is function ke call hone pr ye upar ka code run hoga jha hmne URI mai apne DB ka link id passward pass kia h 


*/


/*

    app.listen(port, () => {
      console.log(`${port} connection successfully established`);
   // });
  //} catch (error) {
    console.error(error);
  }
};

// Call the start function to begin listening
start();


*/



require("dotenv").config();
const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

// Import the connectDB function from the db folder
const connectDB = require('./db/connect');

// Import routes for products
const productsRoutes = require('./routes/products');

// Middleware to parse JSON data
app.use(express.json());

// Route for the root path
app.get('/', (req, res) => {
  res.send("Hi, I'm live");
});

// Middleware to use routes for products
app.use('/api/products', productsRoutes);

// Async function to start the server and connect to the database
const start = async () => {
  try {
    // Connect to the MongoDB database
    await connectDB(process.env.MONGODB_URL || 'mongodb://localhost:27017/myAPI');
    console.log('Connected successfully to MongoDB');
    
    // Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit with failure code if the connection fails
  }
};

// Call the start function to begin listening
start();



// http://localhost:3000/api/products to get products
