const User = require("../../models/User");

const insertCurrentSocialUser = async (query) => {
  const filter = { email: query?.email };
  const cursor = await User.where(filter);
  if (cursor.length === 0) {
    const cursor = await User.insertMany(query);
    return cursor;
  }
  return cursor;
};

module.exports = insertCurrentSocialUser;
