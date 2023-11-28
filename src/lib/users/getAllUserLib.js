const User = require("../../models/User");

const getAllUserLib = async (filter) => {
  //   const filter = User.where({ email: query });
  const cursor = await User.find(filter);
  //   console.log(cursor)

  return cursor;
};

module.exports =getAllUserLib;
