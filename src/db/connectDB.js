const mongoose = require("mongoose");
require("dotenv").config();

// const getConnectionString=()=>{
//     let connectionUrl;

//     if (process.env.NODE_ENV === "development") {
//         connectionUrl = process.env.DATABASE_LOCAL;
//         connectionUrl = connectionUrl.replace(
//           "<username>",
//           process.env.DATABASE_USERNAME
//         );
//         connectionUrl = connectionUrl.replace(
//           "<password>",
//           process.env.DATABASE_PASSWORD 
//         );
//       } else {
//         connectionUrl = process.env.DATABASE_PRODUCTION;
//       }
    
//       return connectionUrl;
// }

const connectDB = async () => {
  try{

    console.log("connectting to database");
    const mongoURI = "mongodb+srv://product_Hunt:b4SMkPX8LB0ngs0p@cluster0.nwipcoy.mongodb.net/productHunt"
  // console.log(mongoURI)
    await mongoose.connect(mongoURI);
    console.log("connected to database");
  }catch(error){
    console.log("DB connection error",error)
  }
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