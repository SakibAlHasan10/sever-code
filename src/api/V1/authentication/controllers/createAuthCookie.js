const generateToken = require("../../../../utils/generateToken");

const createCookie = (req, res, next) => {
  try {
    const user = req.body;
    const token = generateToken(user);
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
  } catch (error) {
    next(error);
  }
};
module.exports = createCookie;
