const insertCurrentSocialUser = require("../../../lib/users/insertSocialUser");

const insertSocialUser = async (req, res, next) => {
  try {
    const query = req.body;
    const user = await insertCurrentSocialUser(query);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = insertSocialUser;
