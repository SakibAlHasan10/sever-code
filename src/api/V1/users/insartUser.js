const insertCurrentUser = require("../../../lib/users/insertUser");

const insertUser = async (req, res) => {
  const query = req.body;
    console.log(query)
  const user = await insertCurrentUser(query);
  res.send(user);
};

module.exports = insertUser;
