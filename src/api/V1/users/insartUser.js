const insertCurrentUser = require("../../../lib/users/insertUser");

const insertUser = async (req, res, next) => {
  try {
    const query = req.body;
    // console.log(query)
    const user = await insertCurrentUser(query);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = insertUser;
