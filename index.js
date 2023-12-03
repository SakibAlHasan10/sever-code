  require("dotenv").config();
const http=require("http")
const app = require("./src/app")
const connectDB = require("./src/db/connectDB");
const server = http.createServer(app)
const port = process.env.PORT || 5000;
const main = async () => {
  await connectDB();
  server.listen(port, () => {
    console.log(`product hunt Server is running on port ${port}`);
  });
};

main();

// const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
 
// async function run() {
  // try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  // } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  // }
// }
// run().catch(console.dir);




