const insertCurrentSocialUser = require("../../../lib/users/insertSocialUser");

const insertSocialUser = async (req, res) => {
  const query = req.body;
  const user = await insertCurrentSocialUser(query);
  res.send(user);
};

module.exports = insertSocialUser;