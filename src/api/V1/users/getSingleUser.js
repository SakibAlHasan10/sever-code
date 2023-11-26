const getCurrentUser = require("../../../lib/users/getSingleUser");

const getSingleUser = async (req, res) => {
  const query = req.params.email;
    console.log(query)
  const user = await getCurrentUser(query);
  res.send(user);
};

module.exports = getSingleUser;