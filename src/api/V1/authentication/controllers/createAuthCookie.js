const jwt = require('jsonwebtoken');
require("dotenv").config();
const createCookie = (req, res) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.SECRET_TK, { expiresIn: "1h" });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
  } catch (error) {
    res.send(error);
  }
};
module.exports = createCookie