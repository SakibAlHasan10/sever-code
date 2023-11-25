const User = require("../../models/User");

const insertCurrentUser = async (query) => {
  const cursor = await User.insertMany(query);

  return cursor;
};

module.exports = insertCurrentUser;
