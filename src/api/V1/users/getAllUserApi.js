const getAllUserLib = require("../../../lib/users/getAllUserLib");

const getAllUserApi = async (req, res) => {
  const filter = req.query.email;
  // console.log(query)
  const user = await getAllUserLib(filter);
  res.send(user);
};

module.exports = getAllUserApi;
