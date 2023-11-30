const getAllUserLib = require("../../../lib/users/getAllUserLib");

const getAllUserApi = async (req, res, next) => {
  try {
    const filter = req.query.email;
    // console.log(query)
    const user = await getAllUserLib(filter);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllUserApi;
