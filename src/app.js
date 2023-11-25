const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

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

app.listen(port, () => {
  console.log(`product hunt Server is running on port ${port}`);
});
