const mongoose = require("mongoose");
require("dotenv").config();

const getConnectionString=()=>{
    let connectionUrl;

    if (process.env.NODE_ENV === "development") {
        connectionUrl = process.env.DATABASE_LOCAL;
        connectionUrl = connectionUrl.replace(
          "<username>",
          process.env.DATABASE_USERNAME
        );
        connectionUrl = connectionUrl.replace(
          "<password>",
          process.env.DATABASE_PASSWORD 
        );
      } else {
        connectionUrl = process.env.DATABASE_PRODUCTION;
      }
    
      return connectionUrl;
}

const connectDB = async () => {
    console.log("connectting to database");
    const mongoURI = getConnectionString();
  
    await mongoose.connect(mongoURI, { dbName: process.env.DB_NAME });
    console.log("connected to database");
  };
  
  
  module.exports= connectDB





















  // require("dotenv").config();
// const http=require("http")
// const app = require("./src/app")
// const connectDB = require("./src/db/connectDB");
// const server = http.createServer(app)
// const port = process.env.PORT || 5000;
// const main = async () => {
//   console.log("connected..")
//   await connectDB();
//   server.listen(5005, () => {
//     console.log(`product hunt Server is running on port ${5005}`);
//   });
// };

// main();