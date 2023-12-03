const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const { LOCAL_CLIENT, CLIENT } = require("../config/default");

const applyMiddleware = (app) => {
  // app.use(
  //   cors({
  //     origin: [
  //       "http://localhost:5173",
  //       "https://creative-technology-f4fea.web.app",
  //     ],
  //     credentials: true,
  //   })
  // );

  // app.use(express.json());
  // app.use(cookieParser());

  app.use(
    cors({
      origin: [
        "http://localhost:5173",
        "https://creative-technology-f4fea.web.app",
      ],
      credentials: true,
      optionSuccessStatus:200,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
};

module.exports = applyMiddleware;
