const User = require("../../models/User");

const changeUserRoleLib = async (filter, role) => {
  const user = await User.findByIdAndUpdate(filter, role);
  console.log(user);
  return user;
};

module.exports = changeUserRoleLib;
