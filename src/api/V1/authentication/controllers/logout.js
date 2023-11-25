const logout = (req, res) => {
  const user = req.body;
  console.log('hello')
  res.clearCookie("token", {
    maxAge: 0,
    secure: process.env.NODE_ENV === "production" ? true : false,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  });
};
module.exports = logout;
