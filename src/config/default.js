require("dotenv").config();
const config = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT_URL,
  CLIENT: process.env.PRODUCTION_CLIENT_URL,
};

module.exports = Object.freeze(config);