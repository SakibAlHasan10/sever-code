const User = require("../../models/User");

const getCurrentUser = async (query) => {
  const filter = User.where({ email: query });
  const cursor = await filter.findOne();
  //   console.log(cursor)

  return cursor;
};

module.exports = getCurrentUser;
