const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// router
// authentication
const authenticationRouter = require("./routes/V1/authentication/index");

// user
const addUserRouter = require("./routes/V1/user/user");
const addSocialUserRouter = require("./routes/V1/user/socialUser");
const getSingleUser = require("./routes/V1/user/getSingleUser");

// product
const insertProductRouter = require("./routes/V1/products/insertProductRoute");
const findAllProductRoute = require("./routes/V1/products/findAllProductRoute");
const detailsSingleProductRoute = require("./routes/V1/products/detailsSingleProduct");
const deleteSingleProductRoute = require("./routes/V1/products/deleteSingleProductRoute");
const changeStatusRoute = require("./routes/V1/products/changeStatusRoute");
const findAllProdutSecureRoute = require("./routes/V1/products/findAllProdutSecureRoute");
const findProductByUserRoute = require("./routes/V1/products/findProductByUserRoute");
const getAllUserRoute = require("./routes/V1/user/getAllUserRoute");
const changeUserRoleRoute = require("./routes/V1/user/changeUserRoleRoute");
const insartReviews = require("./routes/V1/reviews/insartReviews");
const getReviewsRoute = require("./routes/V1/reviews/getReviewsRoute");
const paymentRoute = require("./routes/V1/paymentRoute/paymentRoute");
const productUpdateRoute = require("./routes/V1/products/productUpdateRoute");
// const countProduct = require("./routes/V1/products/countProduct");
// middleware
applyMiddleware(app);

// router
// authentication
app.use(authenticationRouter);
// users
app.use(addUserRouter);
app.use(addSocialUserRouter);
app.use(getSingleUser);

// product
// app.use(countProduct);
app.use(insertProductRouter);
app.use(findAllProductRoute);
app.use(findAllProdutSecureRoute);
app.use(detailsSingleProductRoute);
app.use(deleteSingleProductRoute);
app.use(changeStatusRoute);
app.use(findProductByUserRoute);
app.use(getAllUserRoute);
app.use(changeUserRoleRoute);
app.use(insartReviews);
app.use(getReviewsRoute);
app.use(paymentRoute);
app.use(productUpdateRoute);

// check server health
app.get("/health", (req, res) => {
  res.send("product hunt is running....");
});

// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`The request url ${req.originalUrl} is invalid`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);



// const main = async () => {
//   await connectDB();
//   app.listen(port, () => {
//     console.log(`product hunt Server is running on port ${port}`);
//   });
// };

// main();

module.exports= app

