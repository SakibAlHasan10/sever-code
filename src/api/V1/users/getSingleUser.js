const getCurrentUser = require("../../../lib/users/getSingleUser");

const getSingleUser = async (req, res, next) => {
  try {
    const query = req.params.email;
    // console.log(query)
    const user = await getCurrentUser(query);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = getSingleUser;
